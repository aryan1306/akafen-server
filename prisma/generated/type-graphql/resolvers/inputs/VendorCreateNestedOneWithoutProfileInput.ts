import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VendorCreateOrConnectWithoutProfileInput } from "../inputs/VendorCreateOrConnectWithoutProfileInput";
import { VendorUncheckedCreateWithoutProfileInput } from "../inputs/VendorUncheckedCreateWithoutProfileInput";
import { VendorWhereUniqueInput } from "../inputs/VendorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VendorCreateNestedOneWithoutProfileInput {
  @TypeGraphQL.Field(_type => VendorUncheckedCreateWithoutProfileInput, {
    nullable: true
  })
  create?: VendorUncheckedCreateWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => VendorCreateOrConnectWithoutProfileInput, {
    nullable: true
  })
  connectOrCreate?: VendorCreateOrConnectWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => VendorWhereUniqueInput, {
    nullable: true
  })
  connect?: VendorWhereUniqueInput | undefined;
}
