/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCityInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  location?: string | null,
};

export type ModelCityConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelCityConditionInput | null > | null,
  or?: Array< ModelCityConditionInput | null > | null,
  not?: ModelCityConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type City = {
  __typename: "City",
  id: string,
  name: string,
  description?: string | null,
  location?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCityInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  location?: string | null,
};

export type DeleteCityInput = {
  id: string,
};

export type ModelCityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelCityFilterInput | null > | null,
  or?: Array< ModelCityFilterInput | null > | null,
  not?: ModelCityFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCityConnection = {
  __typename: "ModelCityConnection",
  items:  Array<City | null >,
  nextToken?: string | null,
};

export type CreateCityMutationVariables = {
  input: CreateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type CreateCityMutation = {
  createCity?:  {
    __typename: "City",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCityMutationVariables = {
  input: UpdateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type UpdateCityMutation = {
  updateCity?:  {
    __typename: "City",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCityMutationVariables = {
  input: DeleteCityInput,
  condition?: ModelCityConditionInput | null,
};

export type DeleteCityMutation = {
  deleteCity?:  {
    __typename: "City",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCityQueryVariables = {
  id: string,
};

export type GetCityQuery = {
  getCity?:  {
    __typename: "City",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCitiesQueryVariables = {
  filter?: ModelCityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCitiesQuery = {
  listCities?:  {
    __typename: "ModelCityConnection",
    items:  Array< {
      __typename: "City",
      id: string,
      name: string,
      description?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCitySubscription = {
  onCreateCity?:  {
    __typename: "City",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCitySubscription = {
  onUpdateCity?:  {
    __typename: "City",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCitySubscription = {
  onDeleteCity?:  {
    __typename: "City",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
