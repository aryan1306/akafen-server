import { nanoid } from "nanoid";
import { ObjectType, Field, ID } from "type-graphql";
import {
	Entity,
	BaseEntity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	BeforeInsert,
	OneToMany,
} from "typeorm";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class Vendor extends BaseEntity {
	@Field(() => ID)
	@PrimaryColumn()
	id: string;

	@Field()
	@Column({ unique: true })
	email: string;

	@Field()
	@Column()
	city: string;

	@Column()
	password: string;

	@Column({ default: false })
	isVerified: boolean;

	@Field()
	@Column({ default: false })
	hasPaid: boolean;

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@Column()
	brandName: string;

	@Field()
	@Column({ unique: true })
	mobile: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	website: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	facebook: string;

	@Field()
	@Column()
	whatsapp: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	instaURL: string;

	@OneToMany(() => Product, (product) => product.vendor)
	products: Product[];

	@BeforeInsert()
	generate() {
		this.id = nanoid();
	}
}
