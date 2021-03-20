import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { Vendor } from "../../../models/Vendor";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Vendor, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any): Promise<Vendor> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).author({});
  }
}
