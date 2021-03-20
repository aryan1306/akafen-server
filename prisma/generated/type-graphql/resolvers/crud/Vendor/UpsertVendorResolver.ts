import * as TypeGraphQL from "type-graphql";
import { UpsertVendorArgs } from "./args/UpsertVendorArgs";
import { Vendor } from "../../../models/Vendor";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class UpsertVendorResolver {
  @TypeGraphQL.Mutation(_returns => Vendor, {
    nullable: false
  })
  async upsertVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertVendorArgs): Promise<Vendor> {
    return getPrismaFromContext(ctx).vendor.upsert(args);
  }
}
