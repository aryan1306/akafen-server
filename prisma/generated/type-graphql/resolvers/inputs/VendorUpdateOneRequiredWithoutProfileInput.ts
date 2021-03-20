import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VendorCreateOrConnectWithoutProfileInput } from "../inputs/VendorCreateOrConnectWithoutProfileInput";
import { VendorUncheckedCreateWithoutProfileInput } from "../inputs/VendorUncheckedCreateWithoutProfileInput";
import { VendorUncheckedUpdateWithoutProfileInput } from "../inputs/VendorUncheckedUpdateWithoutProfileInput";
import { VendorUpsertWithoutProfileInput } from "../inputs/VendorUpsertWithoutProfileInput";
import { VendorWhereUniqueInput } from "../inputs/VendorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VendorUpdateOneRequiredWithoutProfileInput {
  @TypeGraphQL.Field(_type => VendorUncheckedCreateWithoutProfileInput, {
    nullable: true
  })
  create?: VendorUncheckedCreateWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => VendorCreateOrConnectWithoutProfileInput, {
    nullable: true
  })
  connectOrCreate?: VendorCreateOrConnectWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => VendorUpsertWithoutProfileInput, {
    nullable: true
  })
  upsert?: VendorUpsertWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => VendorWhereUniqueInput, {
    nullable: true
  })
  connect?: VendorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VendorUncheckedUpdateWithoutProfileInput, {
    nullable: true
  })
  update?: VendorUncheckedUpdateWithoutProfileInput | undefined;
}
