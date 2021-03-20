import * as TypeGraphQL from "type-graphql";
import { DeleteVendorArgs } from "./args/DeleteVendorArgs";
import { Vendor } from "../../../models/Vendor";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class DeleteVendorResolver {
  @TypeGraphQL.Mutation(_returns => Vendor, {
    nullable: true
  })
  async deleteVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteVendorArgs): Promise<Vendor | null> {
    return getPrismaFromContext(ctx).vendor.delete(args);
  }
}
