import { InputType, Field } from "type-graphql";

@InputType()
export class VendorInput {
	@Field()
	brandName: string;

	@Field()
	email: string;

	@Field()
	password: string;

	@Field()
	city: string;

	@Field({ nullable: true })
	mobile: string;

	@Field({ nullable: true })
	website: string;

	@Field({ nullable: true })
	facebook: string;

	@Field({ nullable: true })
	whatsapp: string;

	@Field({ nullable: true })
	instaURL: string;
}
