import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VendorCreateNestedOneWithoutProfileInput } from "../inputs/VendorCreateNestedOneWithoutProfileInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProfileCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  brandName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mobile!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isMobverified?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instaURL?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebook?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  whatsapp!: string;

  @TypeGraphQL.Field(_type => VendorCreateNestedOneWithoutProfileInput, {
    nullable: false
  })
  vendor!: VendorCreateNestedOneWithoutProfileInput;
}
