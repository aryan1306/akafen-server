import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VendorWhereUniqueInput } from "../../../inputs/VendorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteVendorArgs {
  @TypeGraphQL.Field(_type => VendorWhereUniqueInput, {
    nullable: false
  })
  where!: VendorWhereUniqueInput;
}
