import * as TypeGraphQL from "type-graphql";
import { CreateProductArgs } from "./args/CreateProductArgs";
import { Product } from "../../../models/Product";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class CreateProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false
  })
  async createProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProductArgs): Promise<Product> {
    return getPrismaFromContext(ctx).product.create(args);
  }
}
