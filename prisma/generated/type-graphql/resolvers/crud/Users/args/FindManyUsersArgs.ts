import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOrderByInput } from "../../../inputs/UsersOrderByInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";
import { UsersScalarFieldEnum } from "../../../../enums/UsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUsersArgs {
  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsersOrderByInput], {
    nullable: true
  })
  orderBy?: UsersOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  cursor?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UsersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "email" | "password" | "isVerified" | "createdAt"> | undefined;
}
