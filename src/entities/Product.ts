import { nanoid } from "nanoid";
import { Field, ID, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import { Vendor } from "./Vendor";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
	@Field(() => ID)
	@PrimaryColumn()
	id: string;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	description: string;

	@Field()
	@Column()
	category: string;

	@Field(() => Int)
	@Column("int")
	price: number;

	@Field(() => [String], { nullable: true })
	@Column("simple-array", { nullable: true })
	url: string[];

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@UpdateDateColumn()
	updatedAt: Date;

	@Field()
	@Column()
	vendorId: string;

	@Field(() => Vendor)
	@ManyToOne(() => Vendor, (vendor) => vendor.products)
	@JoinColumn({ name: "vendorId" })
	vendor: Vendor;

	@BeforeInsert()
	generate() {
		this.id = nanoid();
	}
}
