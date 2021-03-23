import { getConnection } from "typeorm";
import { ApolloError } from "apollo-server-express";
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
import { Context } from "./../../index";
import { Product } from "../../entities/Product";
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
	// @Field(() => [String], { nullable: true })
	// url?: string[];
}

const productRepo = getConnection().getRepository(Product);

@Resolver()
export class ProductResolver {
	@Query(() => [Product], { nullable: true })
	@UseMiddleware(isVendorAuth)
	async myProducts(@Ctx() { req }: Context): Promise<Product[]> {
		//@ts-ignore
		const vId = req.session.vendorId;
		const products = await productRepo
			.createQueryBuilder("prod")
			.innerJoinAndSelect("prod.vendor", "vendor")
			.where("prod.vendorId = :vendorId", { vendorId: vId })
			.orderBy("prod.createdAt", "DESC")
			.getMany();

		if (!products) throw new ApolloError("No Products Created");

		return products;
	}

	@Query(() => [Product])
	async allProducts(): Promise<Product[]> {
		const products = await productRepo
			.createQueryBuilder("prod")
			.leftJoinAndSelect("prod.vendor", "vendor")
			.orderBy("prod.createdAt", "DESC")
			.getMany();
		if (!products) {
			throw new ApolloError("We will fill in Soon!!");
		}
		return products;
	}

	@Query(() => [Product])
	async allProductsByCategory(@Arg("category") category: string) {
		const products = await productRepo.find({
			where: { category },
			order: { createdAt: "DESC" },
		});
		if (!products) {
			throw new ApolloError("We will fill in Soon!!");
		}
		return products;
	}

	@Query(() => Product)
	async product(@Arg("id") id: string) {
		const product = await Product.findOne({ id }, { relations: ["vendor"] });
		if (!product) throw new ApolloError("Not Found");
		return product;
	}

	@Mutation(() => Product, { nullable: true })
	@UseMiddleware(isVendorAuth)
	async editProduct(
		@Arg("id") id: string,
		@Arg("data") data: EditProductInput
	) {
		try {
			if (!data.category) {
				throw new ApolloError("Please select a category");
			}
			if (typeof data.price !== "number") {
				throw new ApolloError("Price should be a number");
			}
			//TODO photo updates
			// if(data.url){

			// 	const update = await Product.update({id}, {...data,  })
			// }
			const updatedProduct = await getConnection()
				.createQueryBuilder()
				.update(Product)
				.set({ ...data })
				.where("id = :id", { id })
				.returning([
					"name",
					"description",
					"category",
					"price",
					"vendorId",
					"id",
				])
				.execute();
			return updatedProduct.raw[0];
		} catch (error) {
			throw new ApolloError(error);
		}
	}

	@Mutation(() => Product)
	@UseMiddleware(isVendorAuth)
	async deleteProduct(@Arg("id") id: string) {
		const check = await Product.findOne({ id });
		if (!check) throw new ApolloError("Product does not exist");
		const product = await Product.delete({ id });
		return product;
	}

	@Mutation(() => Product)
	@UseMiddleware(isVendorAuth)
	async createProduct(
		@Ctx() { req }: Context,
		@Arg("data") data: ProductInput
	): Promise<Product> {
		//@ts-ignore
		const vId = req.session.vendorId;
		if (!data.category) {
			throw new ApolloError("Please select a category");
		}
		if (typeof data.price !== "number") {
			throw new ApolloError("Price should be a number");
		}
		const product = await Product.create({
			...data,
			vendorId: vId,
		}).save();
		return product;
	}
}
