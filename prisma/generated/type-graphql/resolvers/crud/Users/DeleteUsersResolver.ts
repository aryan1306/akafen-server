import * as TypeGraphQL from "type-graphql";
import { DeleteUsersArgs } from "./args/DeleteUsersArgs";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class DeleteUsersResolver {
  @TypeGraphQL.Mutation(_returns => Users, {
    nullable: true
  })
  async deleteUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUsersArgs): Promise<Users | null> {
    return getPrismaFromContext(ctx).users.delete(args);
  }
}
