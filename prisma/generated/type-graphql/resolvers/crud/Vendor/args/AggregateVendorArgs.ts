import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VendorOrderByInput } from "../../../inputs/VendorOrderByInput";
import { VendorWhereInput } from "../../../inputs/VendorWhereInput";
import { VendorWhereUniqueInput } from "../../../inputs/VendorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateVendorArgs {
  @TypeGraphQL.Field(_type => VendorWhereInput, {
    nullable: true
  })
  where?: VendorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VendorOrderByInput], {
    nullable: true
  })
  orderBy?: VendorOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => VendorWhereUniqueInput, {
    nullable: true
  })
  cursor?: VendorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
