import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUncheckedCreateWithoutAuthorInput } from "../inputs/ProductUncheckedCreateWithoutAuthorInput";
import { ProductUncheckedUpdateWithoutAuthorInput } from "../inputs/ProductUncheckedUpdateWithoutAuthorInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUncheckedUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: ProductUncheckedUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => ProductUncheckedCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: ProductUncheckedCreateWithoutAuthorInput;
}
