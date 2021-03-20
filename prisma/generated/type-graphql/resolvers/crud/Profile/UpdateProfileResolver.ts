import * as TypeGraphQL from "type-graphql";
import { UpdateProfileArgs } from "./args/UpdateProfileArgs";
import { Profile } from "../../../models/Profile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class UpdateProfileResolver {
  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: true
  })
  async updateProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProfileArgs): Promise<Profile | null> {
    return getPrismaFromContext(ctx).profile.update(args);
  }
}
