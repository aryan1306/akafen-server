import * as TypeGraphQL from "type-graphql";
import { FindFirstProfileArgs } from "./args/FindFirstProfileArgs";
import { Profile } from "../../../models/Profile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class FindFirstProfileResolver {
  @TypeGraphQL.Query(_returns => Profile, {
    nullable: true
  })
  async findFirstProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstProfileArgs): Promise<Profile | null> {
    return getPrismaFromContext(ctx).profile.findFirst(args);
  }
}
