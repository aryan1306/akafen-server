import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VendorCreateOrConnectWithoutProductsInput } from "../inputs/VendorCreateOrConnectWithoutProductsInput";
import { VendorUncheckedCreateWithoutProductsInput } from "../inputs/VendorUncheckedCreateWithoutProductsInput";
import { VendorWhereUniqueInput } from "../inputs/VendorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VendorCreateNestedOneWithoutProductsInput {
  @TypeGraphQL.Field(_type => VendorUncheckedCreateWithoutProductsInput, {
    nullable: true
  })
  create?: VendorUncheckedCreateWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => VendorCreateOrConnectWithoutProductsInput, {
    nullable: true
  })
  connectOrCreate?: VendorCreateOrConnectWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => VendorWhereUniqueInput, {
    nullable: true
  })
  connect?: VendorWhereUniqueInput | undefined;
}
