import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileUncheckedCreateInput } from "../../../inputs/ProfileUncheckedCreateInput";
import { ProfileUncheckedUpdateInput } from "../../../inputs/ProfileUncheckedUpdateInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProfileArgs {
  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: false
  })
  where!: ProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfileUncheckedCreateInput, {
    nullable: false
  })
  create!: ProfileUncheckedCreateInput;

  @TypeGraphQL.Field(_type => ProfileUncheckedUpdateInput, {
    nullable: false
  })
  update!: ProfileUncheckedUpdateInput;
}
