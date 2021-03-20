import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Vendor } from "../models/Vendor";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Profile {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  brandName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mobile!: string;

  isMobverified?: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instaURL?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebook?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  whatsapp!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  vendorId!: number;

  vendor?: Vendor;
}
