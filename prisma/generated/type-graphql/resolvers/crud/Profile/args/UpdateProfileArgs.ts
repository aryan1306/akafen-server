import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileUncheckedUpdateInput } from "../../../inputs/ProfileUncheckedUpdateInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProfileArgs {
  @TypeGraphQL.Field(_type => ProfileUncheckedUpdateInput, {
    nullable: false
  })
  data!: ProfileUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: false
  })
  where!: ProfileWhereUniqueInput;
}
