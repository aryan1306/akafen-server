import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VendorWhereInput } from "../../../inputs/VendorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVendorArgs {
  @TypeGraphQL.Field(_type => VendorWhereInput, {
    nullable: true
  })
  where?: VendorWhereInput | undefined;
}
