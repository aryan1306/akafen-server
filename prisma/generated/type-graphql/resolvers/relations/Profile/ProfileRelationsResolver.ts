import * as TypeGraphQL from "type-graphql";
import { Profile } from "../../../models/Profile";
import { Vendor } from "../../../models/Vendor";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class ProfileRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Vendor, {
    nullable: false
  })
  async vendor(@TypeGraphQL.Root() profile: Profile, @TypeGraphQL.Ctx() ctx: any): Promise<Vendor> {
    return getPrismaFromContext(ctx).profile.findUnique({
      where: {
        id: profile.id,
      },
    }).vendor({});
  }
}
