import * as TypeGraphQL from "type-graphql";
import { FindUniqueUsersArgs } from "./args/FindUniqueUsersArgs";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class FindUniqueUsersResolver {
  @TypeGraphQL.Query(_returns => Users, {
    nullable: true
  })
  async findUniqueUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueUsersArgs): Promise<Users | null> {
    return getPrismaFromContext(ctx).users.findUnique(args);
  }
}
