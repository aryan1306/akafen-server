import * as TypeGraphQL from "type-graphql";
import { FindUniqueVendorArgs } from "./args/FindUniqueVendorArgs";
import { Vendor } from "../../../models/Vendor";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class FindUniqueVendorResolver {
  @TypeGraphQL.Query(_returns => Vendor, {
    nullable: true
  })
  async vendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueVendorArgs): Promise<Vendor | null> {
    return getPrismaFromContext(ctx).vendor.findUnique(args);
  }
}
