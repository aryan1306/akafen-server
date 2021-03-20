import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVendorArgs } from "./args/AggregateVendorArgs";
import { CreateVendorArgs } from "./args/CreateVendorArgs";
import { DeleteManyVendorArgs } from "./args/DeleteManyVendorArgs";
import { DeleteVendorArgs } from "./args/DeleteVendorArgs";
import { FindFirstVendorArgs } from "./args/FindFirstVendorArgs";
import { FindManyVendorArgs } from "./args/FindManyVendorArgs";
import { FindUniqueVendorArgs } from "./args/FindUniqueVendorArgs";
import { UpdateManyVendorArgs } from "./args/UpdateManyVendorArgs";
import { UpdateVendorArgs } from "./args/UpdateVendorArgs";
import { UpsertVendorArgs } from "./args/UpsertVendorArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Vendor } from "../../../models/Vendor";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVendor } from "../../outputs/AggregateVendor";

@TypeGraphQL.Resolver(_of => Vendor)
export class VendorCrudResolver {
  @TypeGraphQL.Query(_returns => Vendor, {
    nullable: true
  })
  async vendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueVendorArgs): Promise<Vendor | null> {
    return getPrismaFromContext(ctx).vendor.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Vendor, {
    nullable: true
  })
  async findFirstVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstVendorArgs): Promise<Vendor | null> {
    return getPrismaFromContext(ctx).vendor.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Vendor], {
    nullable: false
  })
  async vendors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyVendorArgs): Promise<Vendor[]> {
    return getPrismaFromContext(ctx).vendor.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Vendor, {
    nullable: false
  })
  async createVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateVendorArgs): Promise<Vendor> {
    return getPrismaFromContext(ctx).vendor.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Vendor, {
    nullable: true
  })
  async deleteVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteVendorArgs): Promise<Vendor | null> {
    return getPrismaFromContext(ctx).vendor.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Vendor, {
    nullable: true
  })
  async updateVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateVendorArgs): Promise<Vendor | null> {
    return getPrismaFromContext(ctx).vendor.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyVendorArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).vendor.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyVendorArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).vendor.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Vendor, {
    nullable: false
  })
  async upsertVendor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertVendorArgs): Promise<Vendor> {
    return getPrismaFromContext(ctx).vendor.upsert(args);
  }

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
