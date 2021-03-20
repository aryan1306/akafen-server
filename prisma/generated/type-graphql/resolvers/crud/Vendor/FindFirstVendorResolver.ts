import * as TypeGraphQL from "type-graphql";
import { FindFirstVendorArgs } from "./args/FindFirstVendorArgs";
import { Vendor } from "../../../models/Vendor";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class FindFirstVendorResolver {
  @TypeGraphQL.Query(_returns => Vendor, {
    nullable: true
  })
  async findFirstVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstVendorArgs): Promise<Vendor | null> {
    return getPrismaFromContext(ctx).vendor.findFirst(args);
  }
}
