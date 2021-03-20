import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductUncheckedUpdateInput } from "../../../inputs/ProductUncheckedUpdateInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProductArgs {
  @TypeGraphQL.Field(_type => ProductUncheckedUpdateInput, {
    nullable: false
  })
  data!: ProductUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;
}
