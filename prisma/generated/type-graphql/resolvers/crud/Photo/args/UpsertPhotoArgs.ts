import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoUncheckedCreateInput } from "../../../inputs/PhotoUncheckedCreateInput";
import { PhotoUncheckedUpdateInput } from "../../../inputs/PhotoUncheckedUpdateInput";
import { PhotoWhereUniqueInput } from "../../../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPhotoArgs {
  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: false
  })
  where!: PhotoWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhotoUncheckedCreateInput, {
    nullable: false
  })
  create!: PhotoUncheckedCreateInput;

  @TypeGraphQL.Field(_type => PhotoUncheckedUpdateInput, {
    nullable: false
  })
  update!: PhotoUncheckedUpdateInput;
}
