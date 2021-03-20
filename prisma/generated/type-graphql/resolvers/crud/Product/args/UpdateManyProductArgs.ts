import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductUncheckedUpdateManyInput } from "../../../inputs/ProductUncheckedUpdateManyInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProductArgs {
  @TypeGraphQL.Field(_type => ProductUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: ProductUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
