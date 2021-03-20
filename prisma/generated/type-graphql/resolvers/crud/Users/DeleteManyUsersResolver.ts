import * as TypeGraphQL from "type-graphql";
import { DeleteManyUsersArgs } from "./args/DeleteManyUsersArgs";
import { Users } from "../../../models/Users";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class DeleteManyUsersResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyUsersArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).users.deleteMany(args);
  }
}
