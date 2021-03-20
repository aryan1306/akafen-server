import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VendorUncheckedCreateWithoutProductsInput } from "../inputs/VendorUncheckedCreateWithoutProductsInput";
import { VendorUncheckedUpdateWithoutProductsInput } from "../inputs/VendorUncheckedUpdateWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VendorUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => VendorUncheckedUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: VendorUncheckedUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => VendorUncheckedCreateWithoutProductsInput, {
    nullable: false
  })
  create!: VendorUncheckedCreateWithoutProductsInput;
}
