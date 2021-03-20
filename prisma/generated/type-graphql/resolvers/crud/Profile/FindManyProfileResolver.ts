import * as TypeGraphQL from "type-graphql";
import { FindManyProfileArgs } from "./args/FindManyProfileArgs";
import { Profile } from "../../../models/Profile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class FindManyProfileResolver {
  @TypeGraphQL.Query(_returns => [Profile], {
    nullable: false
  })
  async profiles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProfileArgs): Promise<Profile[]> {
    return getPrismaFromContext(ctx).profile.findMany(args);
  }
}
