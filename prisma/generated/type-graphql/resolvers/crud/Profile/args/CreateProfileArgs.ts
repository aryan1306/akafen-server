import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileUncheckedCreateInput } from "../../../inputs/ProfileUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProfileArgs {
  @TypeGraphQL.Field(_type => ProfileUncheckedCreateInput, {
    nullable: false
  })
  data!: ProfileUncheckedCreateInput;
}
