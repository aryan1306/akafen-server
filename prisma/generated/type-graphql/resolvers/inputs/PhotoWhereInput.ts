import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PhotoWhereInput {
  @TypeGraphQL.Field(_type => [PhotoWhereInput], {
    nullable: true
  })
  AND?: PhotoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereInput], {
    nullable: true
  })
  OR?: PhotoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereInput], {
    nullable: true
  })
  NOT?: PhotoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;
}
