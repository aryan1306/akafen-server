import * as TypeGraphQL from "type-graphql";
import { UpdateManyVendorArgs } from "./args/UpdateManyVendorArgs";
import { Vendor } from "../../../models/Vendor";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class UpdateManyVendorResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyVendorArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).vendor.updateMany(args);
  }
}
