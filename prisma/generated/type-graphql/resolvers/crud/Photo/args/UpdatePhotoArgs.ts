import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoUncheckedUpdateInput } from "../../../inputs/PhotoUncheckedUpdateInput";
import { PhotoWhereUniqueInput } from "../../../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePhotoArgs {
  @TypeGraphQL.Field(_type => PhotoUncheckedUpdateInput, {
    nullable: false
  })
  data!: PhotoUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false
  })
  where!: PhotoWhereUniqueInput;
}
