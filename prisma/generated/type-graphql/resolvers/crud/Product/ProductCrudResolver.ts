import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProductArgs } from "./args/AggregateProductArgs";
import { CreateProductArgs } from "./args/CreateProductArgs";
import { DeleteManyProductArgs } from "./args/DeleteManyProductArgs";
import { DeleteProductArgs } from "./args/DeleteProductArgs";
import { FindFirstProductArgs } from "./args/FindFirstProductArgs";
import { FindManyProductArgs } from "./args/FindManyProductArgs";
import { FindUniqueProductArgs } from "./args/FindUniqueProductArgs";
import { UpdateManyProductArgs } from "./args/UpdateManyProductArgs";
import { UpdateProductArgs } from "./args/UpdateProductArgs";
import { UpsertProductArgs } from "./args/UpsertProductArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Product } from "../../../models/Product";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProduct } from "../../outputs/AggregateProduct";

@TypeGraphQL.Resolver(_of => Product)
export class ProductCrudResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true
  })
  async product(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueProductArgs): Promise<Product | null> {
    return getPrismaFromContext(ctx).product.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Product, {
    nullable: true
  })
  async findFirstProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstProductArgs): Promise<Product | null> {
    return getPrismaFromContext(ctx).product.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Product], {
    nullable: false
  })
  async products(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProductArgs): Promise<Product[]> {
    return getPrismaFromContext(ctx).product.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false
  })
  async createProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProductArgs): Promise<Product> {
    return getPrismaFromContext(ctx).product.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true
  })
  async deleteProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProductArgs): Promise<Product | null> {
    return getPrismaFromContext(ctx).product.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true
  })
  async updateProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProductArgs): Promise<Product | null> {
    return getPrismaFromContext(ctx).product.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProductArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).product.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProductArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).product.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false
  })
  async upsertProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProductArgs): Promise<Product> {
    return getPrismaFromContext(ctx).product.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateProduct, {
    nullable: false
  })
  async aggregateProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProductArgs): Promise<AggregateProduct> {
    return getPrismaFromContext(ctx).product.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
