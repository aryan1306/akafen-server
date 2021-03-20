import * as TypeGraphQL from "type-graphql";
import { CreateVendorArgs } from "./args/CreateVendorArgs";
import { Vendor } from "../../../models/Vendor";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class CreateVendorResolver {
  @TypeGraphQL.Mutation(_returns => Vendor, {
    nullable: false
  })
  async createVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateVendorArgs): Promise<Vendor> {
    return getPrismaFromContext(ctx).vendor.create(args);
  }
}
