import { Product } from "../../../prisma/generated/type-graphql/models/Product";
import { ApolloError } from "apollo-server-express";
import {
	Arg,
	Ctx,
	Field,
	InputType,
	Int,
	Mutation,
	Query,
	Resolver,
	UseMiddleware,
} from "type-graphql";
import { Context } from "./../../index";
import { isVendorAuth } from "./../utils/middleware/isAuth";

@InputType()
class ProductInput {
	@Field()
	name: string;
	@Field()
	description: string;
	@Field()
	category: string;
	@Field()
	price: number;
	@Field(() => [String], { nullable: true })
	url?: string[];
}

@InputType()
class EditProductInput {
	@Field({ nullable: true })
	name: string;
	@Field({ nullable: true })
	description: string;
	@Field({ nullable: true })
	category: string;
	@Field({ nullable: true })
	price: number;
	@Field(() => [String], { nullable: true })
	url?: string[];
}

@Resolver()
export class ProductResolver {
	@Query(() => [Product], { nullable: true })
	@UseMiddleware(isVendorAuth)
	async myProducts(@Ctx() { prisma, req }: Context): Promise<Product[]> {
		//@ts-ignore
		const vId = req.session.vendorId;
		const products = await prisma.product.findMany({
			where: { authorId: vId },
		});
		return products;
	}

	@Mutation(() => Product)
	@UseMiddleware(isVendorAuth)
	async editProduct(
		@Ctx() { prisma, req }: Context,
		@Arg("id", () => Int) id: number,
		@Arg("data") data: EditProductInput
	) {
		//@ts-ignore
		const vId = req.session.vendorId;
		try {
			const { name, description, category, price } = data;
			if (!data.category) {
				throw new ApolloError("Please select a category");
			}
			if (typeof data.price !== "number") {
				throw new ApolloError("Price should be a number");
			}
			const updatedProduct = await prisma.product.update({
				data: {
					name,
					description,
					category,
					price,
				},
				where: { id },
			});
			return updatedProduct;
		} catch (error) {
			throw new ApolloError(error);
		}
	}

	@Mutation(() => Product)
	@UseMiddleware(isVendorAuth)
	async createProduct(
		@Ctx() { prisma, req }: Context,
		@Arg("data") data: ProductInput
	): Promise<Product> {
		//@ts-ignore
		const vId = req.session.vendorId;
		try {
			const { name, description, category, price, url } = data;
			if (!data.category) {
				throw new ApolloError("Please select a category");
			}
			if (typeof data.price !== "number") {
				throw new ApolloError("Price should be a number");
			}
			const product = await prisma.product.create({
				data: {
					name,
					description,
					url,
					category,
					price,
					authorId: vId,
				},
			});

			return product;
		} catch (err) {
			throw new ApolloError(err);
		}
	}
}
