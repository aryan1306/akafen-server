import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVendorArgs } from "./args/AggregateVendorArgs";
import { Vendor } from "../../../models/Vendor";
import { AggregateVendor } from "../../outputs/AggregateVendor";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vendor)
export class AggregateVendorResolver {
  @TypeGraphQL.Query(_returns => AggregateVendor, {
    nullable: false
  })
  async aggregateVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVendorArgs): Promise<AggregateVendor> {
    return getPrismaFromContext(ctx).vendor.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
