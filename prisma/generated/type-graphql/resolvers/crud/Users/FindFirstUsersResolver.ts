import * as TypeGraphQL from "type-graphql";
import { FindFirstUsersArgs } from "./args/FindFirstUsersArgs";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class FindFirstUsersResolver {
  @TypeGraphQL.Query(_returns => Users, {
    nullable: true
  })
  async findFirstUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstUsersArgs): Promise<Users | null> {
    return getPrismaFromContext(ctx).users.findFirst(args);
  }
}
