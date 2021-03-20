import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VendorUncheckedCreateWithoutProductsInput } from "../inputs/VendorUncheckedCreateWithoutProductsInput";
import { VendorWhereUniqueInput } from "../inputs/VendorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VendorCreateOrConnectWithoutProductsInput {
  @TypeGraphQL.Field(_type => VendorWhereUniqueInput, {
    nullable: false
  })
  where!: VendorWhereUniqueInput;

  @TypeGraphQL.Field(_type => VendorUncheckedCreateWithoutProductsInput, {
    nullable: false
  })
  create!: VendorUncheckedCreateWithoutProductsInput;
}
