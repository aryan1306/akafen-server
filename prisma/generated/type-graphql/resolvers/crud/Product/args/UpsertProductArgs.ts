import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductUncheckedCreateInput } from "../../../inputs/ProductUncheckedCreateInput";
import { ProductUncheckedUpdateInput } from "../../../inputs/ProductUncheckedUpdateInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUncheckedCreateInput, {
    nullable: false
  })
  create!: ProductUncheckedCreateInput;

  @TypeGraphQL.Field(_type => ProductUncheckedUpdateInput, {
    nullable: false
  })
  update!: ProductUncheckedUpdateInput;
}
