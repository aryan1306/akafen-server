import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoUncheckedCreateInput } from "../../../inputs/PhotoUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePhotoArgs {
  @TypeGraphQL.Field(_type => PhotoUncheckedCreateInput, {
    nullable: false
  })
  data!: PhotoUncheckedCreateInput;
}
