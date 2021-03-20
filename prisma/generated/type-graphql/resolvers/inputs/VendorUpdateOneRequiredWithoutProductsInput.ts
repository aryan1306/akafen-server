import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VendorCreateOrConnectWithoutProductsInput } from "../inputs/VendorCreateOrConnectWithoutProductsInput";
import { VendorUncheckedCreateWithoutProductsInput } from "../inputs/VendorUncheckedCreateWithoutProductsInput";
import { VendorUncheckedUpdateWithoutProductsInput } from "../inputs/VendorUncheckedUpdateWithoutProductsInput";
import { VendorUpsertWithoutProductsInput } from "../inputs/VendorUpsertWithoutProductsInput";
import { VendorWhereUniqueInput } from "../inputs/VendorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VendorUpdateOneRequiredWithoutProductsInput {
  @TypeGraphQL.Field(_type => VendorUncheckedCreateWithoutProductsInput, {
    nullable: true
  })
  create?: VendorUncheckedCreateWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => VendorCreateOrConnectWithoutProductsInput, {
    nullable: true
  })
  connectOrCreate?: VendorCreateOrConnectWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => VendorUpsertWithoutProductsInput, {
    nullable: true
  })
  upsert?: VendorUpsertWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => VendorWhereUniqueInput, {
    nullable: true
  })
  connect?: VendorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VendorUncheckedUpdateWithoutProductsInput, {
    nullable: true
  })
  update?: VendorUncheckedUpdateWithoutProductsInput | undefined;
}
