import * as TypeGraphQL from "type-graphql";
import { UpsertProfileArgs } from "./args/UpsertProfileArgs";
import { Profile } from "../../../models/Profile";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class UpsertProfileResolver {
  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: false
  })
  async upsertProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProfileArgs): Promise<Profile> {
    return getPrismaFromContext(ctx).profile.upsert(args);
  }
}
