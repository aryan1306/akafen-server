import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUncheckedUpdateWithoutAuthorInput } from "../inputs/ProductUncheckedUpdateWithoutAuthorInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUncheckedUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: ProductUncheckedUpdateWithoutAuthorInput;
}
