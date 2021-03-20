import * as TypeGraphQL from "type-graphql";
import { CreateUsersArgs } from "./args/CreateUsersArgs";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class CreateUsersResolver {
  @TypeGraphQL.Mutation(_returns => Users, {
    nullable: false
  })
  async createUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUsersArgs): Promise<Users> {
    return getPrismaFromContext(ctx).users.create(args);
  }
}
