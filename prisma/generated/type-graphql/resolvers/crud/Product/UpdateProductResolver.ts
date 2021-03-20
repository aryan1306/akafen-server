import * as TypeGraphQL from "type-graphql";
import { UpdateProductArgs } from "./args/UpdateProductArgs";
import { Product } from "../../../models/Product";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class UpdateProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true
  })
  async updateProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProductArgs): Promise<Product | null> {
    return getPrismaFromContext(ctx).product.update(args);
  }
}
