import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProfileArgs } from "./args/AggregateProfileArgs";
import { CreateProfileArgs } from "./args/CreateProfileArgs";
import { DeleteManyProfileArgs } from "./args/DeleteManyProfileArgs";
import { DeleteProfileArgs } from "./args/DeleteProfileArgs";
import { FindFirstProfileArgs } from "./args/FindFirstProfileArgs";
import { FindManyProfileArgs } from "./args/FindManyProfileArgs";
import { FindUniqueProfileArgs } from "./args/FindUniqueProfileArgs";
import { UpdateManyProfileArgs } from "./args/UpdateManyProfileArgs";
import { UpdateProfileArgs } from "./args/UpdateProfileArgs";
import { UpsertProfileArgs } from "./args/UpsertProfileArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Profile } from "../../../models/Profile";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProfile } from "../../outputs/AggregateProfile";

@TypeGraphQL.Resolver(_of => Profile)
export class ProfileCrudResolver {
  @TypeGraphQL.Query(_returns => Profile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueProfileArgs): Promise<Profile | null> {
    return getPrismaFromContext(ctx).profile.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Profile, {
    nullable: true
  })
  async findFirstProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstProfileArgs): Promise<Profile | null> {
    return getPrismaFromContext(ctx).profile.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Profile], {
    nullable: false
  })
  async profiles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProfileArgs): Promise<Profile[]> {
    return getPrismaFromContext(ctx).profile.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: false
  })
  async createProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProfileArgs): Promise<Profile> {
    return getPrismaFromContext(ctx).profile.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: true
  })
  async deleteProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProfileArgs): Promise<Profile | null> {
    return getPrismaFromContext(ctx).profile.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: true
  })
  async updateProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProfileArgs): Promise<Profile | null> {
    return getPrismaFromContext(ctx).profile.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProfileArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).profile.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProfileArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).profile.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: false
  })
  async upsertProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProfileArgs): Promise<Profile> {
    return getPrismaFromContext(ctx).profile.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateProfile, {
    nullable: false
  })
  async aggregateProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProfileArgs): Promise<AggregateProfile> {
    return getPrismaFromContext(ctx).profile.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
