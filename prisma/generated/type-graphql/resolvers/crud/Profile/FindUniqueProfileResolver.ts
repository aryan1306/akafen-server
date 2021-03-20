import * as TypeGraphQL from "type-graphql";
import { FindUniqueProfileArgs } from "./args/FindUniqueProfileArgs";
import { Profile } from "../../../models/Profile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class FindUniqueProfileResolver {
  @TypeGraphQL.Query(_returns => Profile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueProfileArgs): Promise<Profile | null> {
    return getPrismaFromContext(ctx).profile.findUnique(args);
  }
}
