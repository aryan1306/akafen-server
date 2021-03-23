import { ApolloError } from "apollo-server-express";
import { hash, verify } from "argon2";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Vendor } from "../../entities/Vendor";
import { Context } from "../../index";
import { redis } from "../../redis";
import { paymentMail } from "../utils/paymentMail";
import { generateUniqueCode, generatePaymentCode } from "./../utils/genCode";
import { sendEmail } from "./../utils/sendEmail";
import { VendorInput } from "./VendorInput";

@Resolver()
export class VendorAuth {
	@Query(() => String)
	hello() {
		return "hello world";
	}

	@Mutation(() => Vendor)
	async register(
		@Ctx() { req }: Context,
		@Arg("data") data: VendorInput
	): Promise<Vendor> {
		const existingVendor = await Vendor.findOne({
			email: data.email,
			mobile: data.mobile,
		});
		if (existingVendor) {
			throw new ApolloError("An account with this email/phone exists");
		}
		const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!data.email.match(reg)) {
			throw new Error("Please enter a valid email");
		}

		if (data.mobile.length !== 10) {
			throw new ApolloError("Please Enter a valid mobile number");
		}

		if (data.whatsapp.length !== 10) {
			throw new ApolloError("Please enter valid mobile number");
		}
		if (data.password.length <= 8) {
			throw new ApolloError(
				"Password length should be greater than 8 characters"
			);
		}
		const hashedPassword = await hash(data.password);
		const vendor = await Vendor.create({
			...data,
			password: hashedPassword,
		}).save();
		await sendEmail(await generateUniqueCode(vendor.id), vendor.email);
		//@ts-ignore
		req.session.vendorId = vendor.id;
		return vendor;
	}

	@Mutation(() => Vendor)
	async login(
		@Ctx() { req }: Context,
		@Arg("email") email: string,
		@Arg("password") password: string
	): Promise<Vendor> {
		const vendor = await Vendor.findOne({ email });
		if (!vendor) {
			throw new ApolloError("This account is not registered please register");
		}
		if (!vendor.isVerified) {
			throw new ApolloError("This email is not verified");
		}
		if (!vendor.hasPaid) {
			throw new ApolloError("Please confirm payment to login");
		}
		const validate = await verify(vendor.password, password);
		if (!validate) {
			throw new ApolloError("Incorrect password. Please try again");
		}
		//@ts-ignore
		req.session.vendorId = vendor.id;
		return vendor;
	}

	@Mutation(() => Boolean)
	async confirmVendor(@Arg("code") code: string): Promise<Boolean> {
		const vId = await redis.get(code);
		if (!vId) {
			return false;
		}
		await Vendor.update({ id: vId }, { isVerified: true });
		const vendor = await Vendor.findOne({ id: vId });
		if (!vendor) {
			return false;
		}
		await paymentMail(
			await generatePaymentCode(vId),
			vendor!.brandName,
			vendor!.mobile
		);
		return true;
	}
	@Mutation(() => Boolean)
	async confirmPayment(@Arg("code") code: string): Promise<Boolean> {
		const vId = await redis.get(code);
		if (!vId) {
			return false;
		}
		await Vendor.update({ id: vId }, { hasPaid: true });
		return true;
	}

	@Query(() => Vendor, { nullable: true })
	async vendorMeQuery(@Ctx() { req }: Context) {
		//@ts-ignore
		const vId = req.session.vendorId;
		if (!vId) {
			return null;
		}
		const vendor = await Vendor.findOne({ id: vId });
		return vendor;
	}

	@Mutation(() => Boolean)
	logout(@Ctx() { req, res }: Context) {
		return new Promise((resolve) =>
			req.session.destroy((err) => {
				res.clearCookie("qid");
				if (err) {
					console.log(err);
					resolve(false);
					return;
				}

				resolve(true);
			})
		);
	}
}
