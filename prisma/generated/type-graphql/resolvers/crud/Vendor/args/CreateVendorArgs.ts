import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VendorUncheckedCreateInput } from "../../../inputs/VendorUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVendorArgs {
  @TypeGraphQL.Field(_type => VendorUncheckedCreateInput, {
    nullable: false
  })
  data!: VendorUncheckedCreateInput;
}
