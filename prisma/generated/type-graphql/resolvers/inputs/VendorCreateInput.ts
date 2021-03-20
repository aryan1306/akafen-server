import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedManyWithoutAuthorInput } from "../inputs/ProductCreateNestedManyWithoutAuthorInput";
import { ProfileCreateNestedOneWithoutVendorInput } from "../inputs/ProfileCreateNestedOneWithoutVendorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VendorCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isVerified?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hasPaid?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutVendorInput, {
    nullable: true
  })
  profile?: ProfileCreateNestedOneWithoutVendorInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  products?: ProductCreateNestedManyWithoutAuthorInput | undefined;
}
