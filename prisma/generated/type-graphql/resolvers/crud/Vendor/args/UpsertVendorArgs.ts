import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VendorUncheckedCreateInput } from "../../../inputs/VendorUncheckedCreateInput";
import { VendorUncheckedUpdateInput } from "../../../inputs/VendorUncheckedUpdateInput";
import { VendorWhereUniqueInput } from "../../../inputs/VendorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVendorArgs {
  @TypeGraphQL.Field(_type => VendorWhereUniqueInput, {
    nullable: false
  })
  where!: VendorWhereUniqueInput;

  @TypeGraphQL.Field(_type => VendorUncheckedCreateInput, {
    nullable: false
  })
  create!: VendorUncheckedCreateInput;

  @TypeGraphQL.Field(_type => VendorUncheckedUpdateInput, {
    nullable: false
  })
  update!: VendorUncheckedUpdateInput;
}
