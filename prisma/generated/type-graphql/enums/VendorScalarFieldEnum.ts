import * as TypeGraphQL from "type-graphql";

export enum VendorScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  password = "password",
  name = "name",
  city = "city",
  email = "email",
  isVerified = "isVerified",
  hasPaid = "hasPaid"
}
TypeGraphQL.registerEnumType(VendorScalarFieldEnum, {
  name: "VendorScalarFieldEnum",
  description: undefined,
});
