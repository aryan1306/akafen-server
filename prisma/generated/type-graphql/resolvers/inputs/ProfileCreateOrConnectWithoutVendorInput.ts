import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileUncheckedCreateWithoutVendorInput } from "../inputs/ProfileUncheckedCreateWithoutVendorInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProfileCreateOrConnectWithoutVendorInput {
  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: false
  })
  where!: ProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfileUncheckedCreateWithoutVendorInput, {
    nullable: false
  })
  create!: ProfileUncheckedCreateWithoutVendorInput;
}
