import { nanoid } from "nanoid";
import { Field, ID, ObjectType } from "type-graphql";
import {
	BaseEntity,
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Users extends BaseEntity {
	@Field(() => ID)
	@PrimaryColumn()
	id: string;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column({ unique: true })
	email: string;

	@Field()
	@Column()
	password: string;

	@Field()
	@Column({ default: false })
	isVerified: boolean;

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@BeforeInsert()
	generate() {
		this.id = nanoid();
	}
}
