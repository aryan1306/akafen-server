import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUncheckedUpdateManyWithoutProductsInput } from "../inputs/ProductUncheckedUpdateManyWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ProductScalarWhereInput, {
    nullable: false
  })
  where!: ProductScalarWhereInput;

  @TypeGraphQL.Field(_type => ProductUncheckedUpdateManyWithoutProductsInput, {
    nullable: false
  })
  data!: ProductUncheckedUpdateManyWithoutProductsInput;
}
