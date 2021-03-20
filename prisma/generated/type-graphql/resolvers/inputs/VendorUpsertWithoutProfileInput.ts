import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VendorUncheckedCreateWithoutProfileInput } from "../inputs/VendorUncheckedCreateWithoutProfileInput";
import { VendorUncheckedUpdateWithoutProfileInput } from "../inputs/VendorUncheckedUpdateWithoutProfileInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VendorUpsertWithoutProfileInput {
  @TypeGraphQL.Field(_type => VendorUncheckedUpdateWithoutProfileInput, {
    nullable: false
  })
  update!: VendorUncheckedUpdateWithoutProfileInput;

  @TypeGraphQL.Field(_type => VendorUncheckedCreateWithoutProfileInput, {
    nullable: false
  })
  create!: VendorUncheckedCreateWithoutProfileInput;
}
