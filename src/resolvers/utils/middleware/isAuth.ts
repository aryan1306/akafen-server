import { Context } from "./../../../index";
import { MiddlewareFn } from "type-graphql";

export const isVendorAuth: MiddlewareFn<Context> = ({ context }, next) => {
	//@ts-ignore
	if (!context.req.session.vendorId) {
		throw new Error("You are not Authenticated");
	}

	return next();
};
