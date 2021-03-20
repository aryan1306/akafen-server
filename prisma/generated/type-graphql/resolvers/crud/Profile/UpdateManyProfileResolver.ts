import * as TypeGraphQL from "type-graphql";
import { UpdateManyProfileArgs } from "./args/UpdateManyProfileArgs";
import { Profile } from "../../../models/Profile";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class UpdateManyProfileResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProfileArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).profile.updateMany(args);
  }
}
