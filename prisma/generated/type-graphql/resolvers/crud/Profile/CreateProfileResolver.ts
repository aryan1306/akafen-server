import * as TypeGraphQL from "type-graphql";
import { CreateProfileArgs } from "./args/CreateProfileArgs";
import { Profile } from "../../../models/Profile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class CreateProfileResolver {
  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: false
  })
  async createProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProfileArgs): Promise<Profile> {
    return getPrismaFromContext(ctx).profile.create(args);
  }
}
