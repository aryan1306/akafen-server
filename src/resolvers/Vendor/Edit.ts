import { ApolloError } from "apollo-server-express";
import { Vendor } from "../../entities/Vendor";
import {
	Arg,
	Ctx,
	Field,
	InputType,
	Mutation,
	Resolver,
	UseMiddleware,
} from "type-graphql";
import { isVendorAuth } from "../utils/middleware/isAuth";
import { Context } from "../../index";
import { getConnection } from "typeorm";

@InputType()
class EditProfileInput {
	@Field({ nullable: true })
	brandName: string;

	@Field({ nullable: true })
	city: string;

	@Field({ nullable: true })
	website: string;

	@Field({ nullable: true })
	facebook: string;

	@Field({ nullable: true })
	whatsapp: string;

	@Field({ nullable: true })
	mobile: string;

	@Field({ nullable: true })
	instaURL: string;
}

@Resolver()
export class EditProfile {
	@Mutation(() => Vendor)
	@UseMiddleware(isVendorAuth)
	async editProfile(
		@Ctx() { req }: Context,
		@Arg("data") data: EditProfileInput
	) {
		try {
			//@ts-ignore
			const vId = req.session.vendorId;
			if (data.mobile) {
				if (data.mobile.length !== 10) {
					throw new ApolloError("Please enter a valid mobile number");
				}
			}
			const vendor = await getConnection()
				.createQueryBuilder()
				.update(Vendor)
				.set({ ...data })
				.where("id = :id", { id: vId })
				.returning([
					"brandName",
					"city",
					"website",
					"facebook",
					"whatsapp",
					"mobile",
					"instaURL",
				])
				.execute();

			return vendor.raw[0];
		} catch (err) {
			console.error("Error is: \n", err);
			throw new Error(err);
		}
	}
}
