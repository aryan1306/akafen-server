import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProfileMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  brandName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mobile!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isMobverified!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instaURL!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebook!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whatsapp!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  vendorId!: number;
}
