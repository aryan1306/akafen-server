import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutAuthorInput } from "../inputs/ProductCreateOrConnectWithoutAuthorInput";
import { ProductCreateWithoutAuthorInput } from "../inputs/ProductCreateWithoutAuthorInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutAuthorInput } from "../inputs/ProductUpdateManyWithWhereWithoutAuthorInput";
import { ProductUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutAuthorInput";
import { ProductUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutAuthorInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUncheckedUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ProductCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  set?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
