import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductUncheckedCreateInput } from "../../../inputs/ProductUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProductArgs {
  @TypeGraphQL.Field(_type => ProductUncheckedCreateInput, {
    nullable: false
  })
  data!: ProductUncheckedCreateInput;
}
