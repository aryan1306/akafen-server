import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VendorUncheckedUpdateInput } from "../../../inputs/VendorUncheckedUpdateInput";
import { VendorWhereUniqueInput } from "../../../inputs/VendorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVendorArgs {
  @TypeGraphQL.Field(_type => VendorUncheckedUpdateInput, {
    nullable: false
  })
  data!: VendorUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => VendorWhereUniqueInput, {
    nullable: false
  })
  where!: VendorWhereUniqueInput;
}
