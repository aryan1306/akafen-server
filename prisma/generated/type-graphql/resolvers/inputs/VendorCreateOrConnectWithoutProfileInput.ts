import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VendorUncheckedCreateWithoutProfileInput } from "../inputs/VendorUncheckedCreateWithoutProfileInput";
import { VendorWhereUniqueInput } from "../inputs/VendorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VendorCreateOrConnectWithoutProfileInput {
  @TypeGraphQL.Field(_type => VendorWhereUniqueInput, {
    nullable: false
  })
  where!: VendorWhereUniqueInput;

  @TypeGraphQL.Field(_type => VendorUncheckedCreateWithoutProfileInput, {
    nullable: false
  })
  create!: VendorUncheckedCreateWithoutProfileInput;
}
