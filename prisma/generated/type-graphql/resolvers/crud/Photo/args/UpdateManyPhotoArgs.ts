import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoUncheckedUpdateManyInput } from "../../../inputs/PhotoUncheckedUpdateManyInput";
import { PhotoWhereInput } from "../../../inputs/PhotoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPhotoArgs {
  @TypeGraphQL.Field(_type => PhotoUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: PhotoUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => PhotoWhereInput, {
    nullable: true
  })
  where?: PhotoWhereInput | undefined;
}
