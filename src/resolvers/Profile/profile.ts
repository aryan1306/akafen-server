import { isVendorAuth } from "./../utils/middleware/isAuth";
import { Context } from "./../../index";
import {
	Arg,
	Ctx,
	Field,
	InputType,
	Mutation,
	Query,
	Resolver,
	UseMiddleware,
} from "type-graphql";
import { Profile } from "../../../prisma/generated/type-graphql/models/Profile";
import { ApolloError } from "apollo-server-express";

@InputType()
class ProfileInput {
	@Field()
	brandName: string;

	@Field()
	mobile: string;

	@Field({ nullable: true })
	website: string;

	@Field({ nullable: true })
	instaURL: string;

	@Field({ nullable: true })
	facebook: string;

	@Field()
	whatsapp: string;
}

@Resolver()
export class ProfileResolver {
	@Query(() => Profile)
	@UseMiddleware(isVendorAuth)
	async myProfile(@Ctx() { prisma, req }: Context): Promise<Profile> {
		//@ts-ignore
		const vId = req.session.vendorId;
		const myProfile = await prisma.profile.findFirst({
			where: { vendorId: vId },
		});
		if (!myProfile) {
			throw new ApolloError("Create your Profile");
		}
		return myProfile;
	}
	@Mutation(() => Profile)
	@UseMiddleware(isVendorAuth)
	async newProfile(
		@Ctx() { prisma, req }: Context,
		@Arg("data") data: ProfileInput
	) {
		//@ts-ignore
		const vId = req.session.vendorId;
		const existingProfile = await prisma.profile.findFirst({
			where: { mobile: data.mobile },
		});
		if (existingProfile) {
			throw new ApolloError("Profile already exists");
		}
		if (data.mobile.length !== 10) {
			throw new ApolloError("Please enter a valid mobile number");
		}
		if (data.whatsapp.length !== 10) {
			throw new ApolloError("Please enter a valid number");
		}
		const { brandName, mobile, website, instaURL, facebook, whatsapp } = data;
		const profile = await prisma.profile.create({
			data: {
				brandName,
				mobile,
				website,
				instaURL,
				facebook,
				whatsapp,
				vendorId: vId,
			},
		});
		return profile;
	}
}
