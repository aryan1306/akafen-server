import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUsersArgs } from "./args/AggregateUsersArgs";
import { CreateUsersArgs } from "./args/CreateUsersArgs";
import { DeleteManyUsersArgs } from "./args/DeleteManyUsersArgs";
import { DeleteUsersArgs } from "./args/DeleteUsersArgs";
import { FindFirstUsersArgs } from "./args/FindFirstUsersArgs";
import { FindManyUsersArgs } from "./args/FindManyUsersArgs";
import { FindUniqueUsersArgs } from "./args/FindUniqueUsersArgs";
import { UpdateManyUsersArgs } from "./args/UpdateManyUsersArgs";
import { UpdateUsersArgs } from "./args/UpdateUsersArgs";
import { UpsertUsersArgs } from "./args/UpsertUsersArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Users } from "../../../models/Users";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUsers } from "../../outputs/AggregateUsers";

@TypeGraphQL.Resolver(_of => Users)
export class UsersCrudResolver {
  @TypeGraphQL.Query(_returns => Users, {
    nullable: true
  })
  async findUniqueUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueUsersArgs): Promise<Users | null> {
    return getPrismaFromContext(ctx).users.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Users, {
    nullable: true
  })
  async findFirstUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstUsersArgs): Promise<Users | null> {
    return getPrismaFromContext(ctx).users.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Users], {
    nullable: false
  })
  async findManyUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUsersArgs): Promise<Users[]> {
    return getPrismaFromContext(ctx).users.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Users, {
    nullable: false
  })
  async createUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUsersArgs): Promise<Users> {
    return getPrismaFromContext(ctx).users.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Users, {
    nullable: true
  })
  async deleteUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUsersArgs): Promise<Users | null> {
    return getPrismaFromContext(ctx).users.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Users, {
    nullable: true
  })
  async updateUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUsersArgs): Promise<Users | null> {
    return getPrismaFromContext(ctx).users.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyUsersArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).users.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyUsersArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).users.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Users, {
    nullable: false
  })
  async upsertUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUsersArgs): Promise<Users> {
    return getPrismaFromContext(ctx).users.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateUsers, {
    nullable: false
  })
  async aggregateUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUsersArgs): Promise<AggregateUsers> {
    return getPrismaFromContext(ctx).users.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
