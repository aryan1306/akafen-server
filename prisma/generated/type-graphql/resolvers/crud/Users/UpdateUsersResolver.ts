import * as TypeGraphQL from "type-graphql";
import { UpdateUsersArgs } from "./args/UpdateUsersArgs";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class UpdateUsersResolver {
  @TypeGraphQL.Mutation(_returns => Users, {
    nullable: true
  })
  async updateUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUsersArgs): Promise<Users | null> {
    return getPrismaFromContext(ctx).users.update(args);
  }
}
