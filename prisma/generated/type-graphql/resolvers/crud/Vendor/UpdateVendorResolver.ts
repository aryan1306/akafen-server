import * as TypeGraphQL from "type-graphql";
import { UpdateVendorArgs } from "./args/UpdateVendorArgs";
import { Vendor } from "../../../models/Vendor";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class UpdateVendorResolver {
  @TypeGraphQL.Mutation(_returns => Vendor, {
    nullable: true
  })
  async updateVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateVendorArgs): Promise<Vendor | null> {
    return getPrismaFromContext(ctx).vendor.update(args);
  }
}
