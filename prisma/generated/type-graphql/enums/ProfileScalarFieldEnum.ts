import * as TypeGraphQL from "type-graphql";

export enum ProfileScalarFieldEnum {
  id = "id",
  brandName = "brandName",
  mobile = "mobile",
  isMobverified = "isMobverified",
  website = "website",
  instaURL = "instaURL",
  facebook = "facebook",
  whatsapp = "whatsapp",
  vendorId = "vendorId"
}
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
  name: "ProfileScalarFieldEnum",
  description: undefined,
});
