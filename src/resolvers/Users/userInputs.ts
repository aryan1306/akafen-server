import { Field, InputType } from "type-graphql";

@InputType()
export class UsersInput {
	@Field()
	email: string;

	@Field()
	name: string;

	@Field()
	password: string;
}

@InputType()
export class UsersLoginInput {
	@Field()
	email: string;

	@Field()
	password: string;
}
