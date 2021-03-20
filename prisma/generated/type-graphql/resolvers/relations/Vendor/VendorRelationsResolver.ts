import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { Profile } from "../../../models/Profile";
import { Vendor } from "../../../models/Vendor";
import { VendorProductsArgs } from "./args/VendorProductsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class VendorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Profile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Root() vendor: Vendor, @TypeGraphQL.Ctx() ctx: any): Promise<Profile | null> {
    return getPrismaFromContext(ctx).vendor.findUnique({
      where: {
        id: vendor.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: false
  })
  async products(@TypeGraphQL.Root() vendor: Vendor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: VendorProductsArgs): Promise<Product[]> {
    return getPrismaFromContext(ctx).vendor.findUnique({
      where: {
        id: vendor.id,
      },
    }).products(args);
  }
}
