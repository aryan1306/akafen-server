import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateurlInput } from "../inputs/ProductCreateurlInput";
import { VendorCreateNestedOneWithoutProductsInput } from "../inputs/VendorCreateNestedOneWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  category!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => ProductCreateurlInput, {
    nullable: true
  })
  url?: ProductCreateurlInput | undefined;

  @TypeGraphQL.Field(_type => VendorCreateNestedOneWithoutProductsInput, {
    nullable: false
  })
  author!: VendorCreateNestedOneWithoutProductsInput;
}
