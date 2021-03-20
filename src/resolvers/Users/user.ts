import { redis } from "../../redis";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Users } from "../../../prisma/generated/type-graphql/models/Users";
import { UsersCreateInput } from "../../../prisma/generated/type-graphql/resolvers/inputs/UsersCreateInput";
import { Vendor } from "@prisma/client";
import { ApolloError } from "apollo-server-express";
import { hash, verify } from "argon2";
import { Context } from "vm";
import { generateUniqueCode } from "../utils/genCode";
import { sendEmail } from "../utils/sendEmail";

@Resolver()
export class UserResolver {
	@Mutation(() => Users)
	async userRegister(
		@Ctx() { prisma }: Context,
		@Arg("data") data: UsersCreateInput
	): Promise<Vendor> {
		const existingUser = await prisma.users.findFirst({
			where: {
				email: {
					equals: data.email,
				},
			},
		});
		if (existingUser) {
			throw new ApolloError("An account with this email exists");
		}
		const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!data.email.match(reg)) {
			throw new Error("Please enter a valid email");
		}
		const hashedPassword = await hash(data.password);
		const user = await prisma.users.create({
			data: {
				email: data.email,
				name: data.name,
				password: hashedPassword,
			},
		});
		await sendEmail(await generateUniqueCode(user.id), user.email);
		return user;
	}

	@Mutation(() => Users)
	async userLogin(
		@Ctx() { prisma, req }: Context,
		@Arg("email") email: string,
		@Arg("password") password: string
	): Promise<Vendor> {
		const user = await prisma.users.findFirst({ where: { email } });
		if (!user) {
			throw new ApolloError("This account is not registered please register");
		}
		if (!user.isVerified) {
			throw new ApolloError("This email is not verified");
		}
		const validate = await verify(user.password, password);
		if (!validate) {
			throw new ApolloError("Incorrect password. Please try again");
		}
		//@ts-ignore
		req.session.userId = user.id;
		return user;
	}

	@Mutation(() => Boolean)
	async confirmUser(
		@Ctx() { prisma }: Context,
		@Arg("code") code: string
	): Promise<Boolean> {
		const vId = await redis.get(code);
		if (!vId) {
			return false;
		}
		await prisma.users.update({
			where: { id: parseInt(vId) },
			data: { isVerified: true },
		});
		return true;
	}

	@Query(() => Users, { nullable: true })
	async userMe(@Ctx() { req, prisma }: Context) {
		//@ts-ignore
		const uId = req.session.userId;
		if (!uId) {
			return null;
		}
		const user = await prisma.users.findFirst({ where: { id: uId } });
		return user;
	}
}
