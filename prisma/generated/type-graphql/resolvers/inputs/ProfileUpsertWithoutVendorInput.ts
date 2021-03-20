import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileUncheckedCreateWithoutVendorInput } from "../inputs/ProfileUncheckedCreateWithoutVendorInput";
import { ProfileUncheckedUpdateWithoutVendorInput } from "../inputs/ProfileUncheckedUpdateWithoutVendorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProfileUpsertWithoutVendorInput {
  @TypeGraphQL.Field(_type => ProfileUncheckedUpdateWithoutVendorInput, {
    nullable: false
  })
  update!: ProfileUncheckedUpdateWithoutVendorInput;

  @TypeGraphQL.Field(_type => ProfileUncheckedCreateWithoutVendorInput, {
    nullable: false
  })
  create!: ProfileUncheckedCreateWithoutVendorInput;
}
