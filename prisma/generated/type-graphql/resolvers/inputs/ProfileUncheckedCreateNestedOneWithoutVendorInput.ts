import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateOrConnectWithoutVendorInput } from "../inputs/ProfileCreateOrConnectWithoutVendorInput";
import { ProfileUncheckedCreateWithoutVendorInput } from "../inputs/ProfileUncheckedCreateWithoutVendorInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProfileUncheckedCreateNestedOneWithoutVendorInput {
  @TypeGraphQL.Field(_type => ProfileUncheckedCreateWithoutVendorInput, {
    nullable: true
  })
  create?: ProfileUncheckedCreateWithoutVendorInput | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateOrConnectWithoutVendorInput, {
    nullable: true
  })
  connectOrCreate?: ProfileCreateOrConnectWithoutVendorInput | undefined;

  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: ProfileWhereUniqueInput | undefined;
}
