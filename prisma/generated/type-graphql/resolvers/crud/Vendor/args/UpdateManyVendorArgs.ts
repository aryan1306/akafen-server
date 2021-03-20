import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VendorUncheckedUpdateManyInput } from "../../../inputs/VendorUncheckedUpdateManyInput";
import { VendorWhereInput } from "../../../inputs/VendorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVendorArgs {
  @TypeGraphQL.Field(_type => VendorUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: VendorUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => VendorWhereInput, {
    nullable: true
  })
  where?: VendorWhereInput | undefined;
}
