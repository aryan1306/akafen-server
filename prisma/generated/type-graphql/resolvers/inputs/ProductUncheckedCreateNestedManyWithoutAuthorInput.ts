import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutAuthorInput } from "../inputs/ProductCreateOrConnectWithoutAuthorInput";
import { ProductCreateWithoutAuthorInput } from "../inputs/ProductCreateWithoutAuthorInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUncheckedCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ProductCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
