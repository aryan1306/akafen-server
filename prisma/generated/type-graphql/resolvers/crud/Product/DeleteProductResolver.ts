import * as TypeGraphQL from "type-graphql";
import { DeleteProductArgs } from "./args/DeleteProductArgs";
import { Product } from "../../../models/Product";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class DeleteProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true
  })
  async deleteProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProductArgs): Promise<Product | null> {
    return getPrismaFromContext(ctx).product.delete(args);
  }
}
