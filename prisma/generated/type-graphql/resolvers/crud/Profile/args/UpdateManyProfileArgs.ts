import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileUncheckedUpdateManyInput } from "../../../inputs/ProfileUncheckedUpdateManyInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProfileArgs {
  @TypeGraphQL.Field(_type => ProfileUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: ProfileUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => ProfileWhereInput, {
    nullable: true
  })
  where?: ProfileWhereInput | undefined;
}
