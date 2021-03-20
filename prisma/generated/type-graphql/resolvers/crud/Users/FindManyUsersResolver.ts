import * as TypeGraphQL from "type-graphql";
import { FindManyUsersArgs } from "./args/FindManyUsersArgs";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class FindManyUsersResolver {
  @TypeGraphQL.Query(_returns => [Users], {
    nullable: false
  })
  async findManyUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUsersArgs): Promise<Users[]> {
    return getPrismaFromContext(ctx).users.findMany(args);
  }
}
