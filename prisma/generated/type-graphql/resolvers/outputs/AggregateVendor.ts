import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VendorAvgAggregate } from "../outputs/VendorAvgAggregate";
import { VendorCountAggregate } from "../outputs/VendorCountAggregate";
import { VendorMaxAggregate } from "../outputs/VendorMaxAggregate";
import { VendorMinAggregate } from "../outputs/VendorMinAggregate";
import { VendorSumAggregate } from "../outputs/VendorSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateVendor {
  @TypeGraphQL.Field(_type => VendorCountAggregate, {
    nullable: true
  })
  count!: VendorCountAggregate | null;

  @TypeGraphQL.Field(_type => VendorAvgAggregate, {
    nullable: true
  })
  avg!: VendorAvgAggregate | null;

  @TypeGraphQL.Field(_type => VendorSumAggregate, {
    nullable: true
  })
  sum!: VendorSumAggregate | null;

  @TypeGraphQL.Field(_type => VendorMinAggregate, {
    nullable: true
  })
  min!: VendorMinAggregate | null;

  @TypeGraphQL.Field(_type => VendorMaxAggregate, {
    nullable: true
  })
  max!: VendorMaxAggregate | null;
}
