import { generateUniqueCode } from "./../utils/genCode";
import { sendEmail } from "./../utils/sendEmail";
import { ApolloError } from "apollo-server-express";
import {
	Arg,
	Ctx,
	Field,
	InputType,
	Mutation,
	Query,
	Resolver,
} from "type-graphql";
import { Context } from "../../index";
import { hash, verify } from "argon2";
import { redis } from "../../redis";
import { Vendor } from "../../../prisma/generated/type-graphql/models/Vendor";

@InputType()
export class VendorInput {
	@Field()
	name: string;

	@Field()
	email: string;

	@Field()
	password: string;

	@Field()
	city: string;
}

@Resolver()
export class VendorAuth {
	@Query(() => String)
	hello() {
		return "hello world";
	}

	@Mutation(() => Vendor)
	async register(
		@Ctx() { prisma, req }: Context,
		@Arg("data") data: VendorInput
	): Promise<Vendor> {
		const existingVendor = await prisma.vendor.findFirst({
			where: {
				email: {
					equals: data.email,
				},
			},
		});
		if (existingVendor) {
			throw new ApolloError("An account with this email exists");
		}
		const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!data.email.match(reg)) {
			throw new Error("Please enter a valid email");
		}
		const hashedPassword = await hash(data.password);
		const vendor = await prisma.vendor.create({
			data: {
				email: data.email,
				name: data.name,
				password: hashedPassword,
				city: data.city,
			},
		});
		await sendEmail(await generateUniqueCode(vendor.id), vendor.email);
		//@ts-ignore
		req.session.vendorId = vendor.id;
		return vendor;
	}

	@Mutation(() => Vendor)
	async login(
		@Ctx() { prisma, req }: Context,
		@Arg("email") email: string,
		@Arg("password") password: string
	): Promise<Vendor> {
		const vendor = await prisma.vendor.findFirst({ where: { email } });
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
	async confirmVendor(
		@Ctx() { prisma, req }: Context,
		@Arg("code") code: string
	): Promise<Boolean> {
		const vId = await redis.get(code);
		if (!vId) {
			return false;
		}
		await prisma.vendor.update({
			where: { id: parseInt(vId) },
			data: { isVerified: true },
		});
		await sendEmail(
			//@ts-ignore
			await generateUniqueCode(req.session.vendorId),
			"keyevents13@gmail.com"
		);
		return true;
	}
	@Mutation(() => Boolean)
	async confirmPayment(
		@Ctx() { prisma }: Context,
		@Arg("code") code: string
	): Promise<Boolean> {
		const vId = await redis.get(code);
		if (!vId) {
			return false;
		}
		await prisma.vendor.update({
			where: { id: parseInt(vId) },
			data: { hasPaid: true },
		});
		return true;
	}

	@Query(() => Vendor, { nullable: true })
	async vendorMeQuery(@Ctx() { req, prisma }: Context) {
		//@ts-ignore
		const vId = req.session.vendorId;
		if (!vId) {
			return null;
		}
		const vendor = await prisma.vendor.findFirst({ where: { id: vId } });
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
