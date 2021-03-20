import * as TypeGraphQL from "type-graphql";
import { DeleteProfileArgs } from "./args/DeleteProfileArgs";
import { Profile } from "../../../models/Profile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class DeleteProfileResolver {
  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: true
  })
  async deleteProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProfileArgs): Promise<Profile | null> {
    return getPrismaFromContext(ctx).profile.delete(args);
  }
}
