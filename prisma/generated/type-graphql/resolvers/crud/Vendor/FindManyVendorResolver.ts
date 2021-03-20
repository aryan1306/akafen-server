import * as TypeGraphQL from "type-graphql";
import { FindManyVendorArgs } from "./args/FindManyVendorArgs";
import { Vendor } from "../../../models/Vendor";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class FindManyVendorResolver {
  @TypeGraphQL.Query(_returns => [Vendor], {
    nullable: false
  })
  async vendors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyVendorArgs): Promise<Vendor[]> {
    return getPrismaFromContext(ctx).vendor.findMany(args);
  }
}
