import * as TypeGraphQL from "type-graphql";
import { DeleteManyVendorArgs } from "./args/DeleteManyVendorArgs";
import { Vendor } from "../../../models/Vendor";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class DeleteManyVendorResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyVendorArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).vendor.deleteMany(args);
  }
}
