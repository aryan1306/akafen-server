import * as TypeGraphQL from "type-graphql";
import { UpsertUsersArgs } from "./args/UpsertUsersArgs";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class UpsertUsersResolver {
  @TypeGraphQL.Mutation(_returns => Users, {
    nullable: false
  })
  async upsertUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUsersArgs): Promise<Users> {
    return getPrismaFromContext(ctx).users.upsert(args);
  }
}
