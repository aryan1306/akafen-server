import { redis } from "../../redis";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Users } from "../../entities/Users";
import { ApolloError } from "apollo-server-express";
import { hash, verify } from "argon2";
import { Context } from "vm";
import { generateUniqueCode } from "../utils/genCode";
import { sendEmail } from "../utils/sendEmail";
import { UsersInput, UsersLoginInput } from "./userInputs";

@Resolver()
export class UserResolver {
	@Mutation(() => Users)
	async userRegister(@Arg("data") data: UsersInput): Promise<Users> {
		const existingUser = await Users.findOne({ email: data.email });
		if (existingUser) {
			throw new ApolloError("An account with this email exists");
		}
		const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!data.email.match(reg)) {
			throw new ApolloError("Please enter a valid email");
		}
		if (data.password.length <= 8) {
			throw new ApolloError(
				"Password length should be greater than 8 characters"
			);
		}
		const hashedPassword = await hash(data.password);
		const user = await Users.create({
			...data,
			password: hashedPassword,
		}).save();
		await sendEmail(await generateUniqueCode(user.id), user.email);
		return user;
	}

	@Mutation(() => Users)
	async userLogin(
		@Ctx() { req }: Context,
		@Arg("data") data: UsersLoginInput
	): Promise<Users> {
		const user = await Users.findOne({ email: data.email });
		if (!user) {
			throw new ApolloError("This account is not registered please register");
		}
		if (!user.isVerified) {
			throw new ApolloError("This email is not verified");
		}
		const validate = await verify(user.password, data.password);
		if (!validate) {
			throw new ApolloError("Incorrect password. Please try again");
		}
		//@ts-ignore
		req.session.userId = user.id;
		return user;
	}

	@Mutation(() => Boolean)
	async confirmUser(@Arg("code") code: string): Promise<Boolean> {
		const uId = await redis.get(code);
		if (!uId) {
			return false;
		}
		await Users.update({ id: uId }, { isVerified: true });
		return true;
	}

	@Query(() => Users, { nullable: true })
	async userMe(@Ctx() { req }: Context) {
		//@ts-ignore
		const uId = req.session.userId;
		if (!uId) {
			return null;
		}
		const user = await Users.findOne({ id: uId });
		return user;
	}
}
