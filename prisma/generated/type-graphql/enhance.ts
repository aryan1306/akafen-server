import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Vendor: crudResolvers.VendorCrudResolver,
  Profile: crudResolvers.ProfileCrudResolver,
  Product: crudResolvers.ProductCrudResolver,
  Users: crudResolvers.UsersCrudResolver,
  Photo: crudResolvers.PhotoCrudResolver
};
const relationResolversMap = {
  Vendor: relationResolvers.VendorRelationsResolver,
  Profile: relationResolvers.ProfileRelationsResolver,
  Product: relationResolvers.ProductRelationsResolver
};
const actionResolversMap = {
  Vendor: {
    vendor: actionResolvers.FindUniqueVendorResolver,
    findFirstVendor: actionResolvers.FindFirstVendorResolver,
    vendors: actionResolvers.FindManyVendorResolver,
    createVendor: actionResolvers.CreateVendorResolver,
    deleteVendor: actionResolvers.DeleteVendorResolver,
    updateVendor: actionResolvers.UpdateVendorResolver,
    deleteManyVendor: actionResolvers.DeleteManyVendorResolver,
    updateManyVendor: actionResolvers.UpdateManyVendorResolver,
    upsertVendor: actionResolvers.UpsertVendorResolver,
    aggregateVendor: actionResolvers.AggregateVendorResolver
  },
  Profile: {
    profile: actionResolvers.FindUniqueProfileResolver,
    findFirstProfile: actionResolvers.FindFirstProfileResolver,
    profiles: actionResolvers.FindManyProfileResolver,
    createProfile: actionResolvers.CreateProfileResolver,
    deleteProfile: actionResolvers.DeleteProfileResolver,
    updateProfile: actionResolvers.UpdateProfileResolver,
    deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
    updateManyProfile: actionResolvers.UpdateManyProfileResolver,
    upsertProfile: actionResolvers.UpsertProfileResolver,
    aggregateProfile: actionResolvers.AggregateProfileResolver
  },
  Product: {
    product: actionResolvers.FindUniqueProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    products: actionResolvers.FindManyProductResolver,
    createProduct: actionResolvers.CreateProductResolver,
    deleteProduct: actionResolvers.DeleteProductResolver,
    updateProduct: actionResolvers.UpdateProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    upsertProduct: actionResolvers.UpsertProductResolver,
    aggregateProduct: actionResolvers.AggregateProductResolver
  },
  Users: {
    findUniqueUsers: actionResolvers.FindUniqueUsersResolver,
    findFirstUsers: actionResolvers.FindFirstUsersResolver,
    findManyUsers: actionResolvers.FindManyUsersResolver,
    createUsers: actionResolvers.CreateUsersResolver,
    deleteUsers: actionResolvers.DeleteUsersResolver,
    updateUsers: actionResolvers.UpdateUsersResolver,
    deleteManyUsers: actionResolvers.DeleteManyUsersResolver,
    updateManyUsers: actionResolvers.UpdateManyUsersResolver,
    upsertUsers: actionResolvers.UpsertUsersResolver,
    aggregateUsers: actionResolvers.AggregateUsersResolver
  },
  Photo: {
    photo: actionResolvers.FindUniquePhotoResolver,
    findFirstPhoto: actionResolvers.FindFirstPhotoResolver,
    photos: actionResolvers.FindManyPhotoResolver,
    createPhoto: actionResolvers.CreatePhotoResolver,
    deletePhoto: actionResolvers.DeletePhotoResolver,
    updatePhoto: actionResolvers.UpdatePhotoResolver,
    deleteManyPhoto: actionResolvers.DeleteManyPhotoResolver,
    updateManyPhoto: actionResolvers.UpdateManyPhotoResolver,
    upsertPhoto: actionResolvers.UpsertPhotoResolver,
    aggregatePhoto: actionResolvers.AggregatePhotoResolver
  }
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<TModel extends ResolverModelNames> = {
  [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
};

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    for (const modelResolverActionName of Object.keys(resolverActionsConfig)) {
      const decorators = resolverActionsConfig[
        modelResolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const crudTarget = crudResolversMap[modelName].prototype;
      const actionResolversConfig = actionResolversMap[modelName];
      const actionTarget = (actionResolversConfig[
        modelResolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          modelResolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, modelResolverActionName)!,
        );
        decorator(
          actionTarget,
          modelResolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, modelResolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames> = {
  [TActionName in RelationResolverActionNames<TModel>]?: MethodDecorator[];
};

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    for (const relationResolverActionName of Object.keys(relationResolverActionsConfig)) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      const relationResolverTarget = relationResolversMap[modelName].prototype;
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    for (const modelFieldName of Object.keys(enhanceConfig.fields)) {
      const decorators = enhanceConfig.fields[
        modelFieldName as keyof typeof enhanceConfig.fields
      ]!;

      for (const decorator of decorators) {
        decorator(typePrototype, modelFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget);
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
  }
}







