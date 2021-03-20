import * as TypeGraphQL from "type-graphql";
import { FindUniqueProductArgs } from "./args/FindUniqueProductArgs";
import { Product } from "../../../models/Product";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class FindUniqueProductResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true
  })
  async product(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueProductArgs): Promise<Product | null> {
    return getPrismaFromContext(ctx).product.findUnique(args);
  }
}
