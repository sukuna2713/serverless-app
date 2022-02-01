import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
};

export type CreateMessageInput = {
  id?: InputMaybe<Scalars['ID']>;
  owner?: InputMaybe<Scalars['String']>;
  postType: PostType;
  text: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type DeleteMessageInput = {
  id: Scalars['ID'];
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  owner?: Maybe<Scalars['String']>;
  postType: PostType;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  createdAt: Scalars['AWSDateTime'];
};

export enum ModelAttributeTypes {
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet',
  Null = '_null'
}

export type ModelBooleanInput = {
  ne?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
};

export type ModelFloatInput = {
  ne?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
};

export type ModelIdInput = {
  ne?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  contains?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIntInput = {
  ne?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
};

export type ModelMessageConditionInput = {
  owner?: InputMaybe<ModelStringInput>;
  postType?: InputMaybe<ModelPostTypeInput>;
  text?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelMessageConditionInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelMessageConditionInput>>>;
  not?: InputMaybe<ModelMessageConditionInput>;
};

export type ModelMessageConnection = {
  __typename?: 'ModelMessageConnection';
  items: Array<Maybe<Message>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelMessageFilterInput = {
  id?: InputMaybe<ModelIdInput>;
  owner?: InputMaybe<ModelStringInput>;
  postType?: InputMaybe<ModelPostTypeInput>;
  text?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelMessageFilterInput>>>;
  or?: InputMaybe<Array<InputMaybe<ModelMessageFilterInput>>>;
  not?: InputMaybe<ModelMessageFilterInput>;
};

export type ModelPostTypeInput = {
  eq?: InputMaybe<PostType>;
  ne?: InputMaybe<PostType>;
};

export type ModelSizeInput = {
  ne?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  ne?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  beginsWith?: InputMaybe<Scalars['String']>;
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelStringKeyConditionInput = {
  eq?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  beginsWith?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage?: Maybe<Message>;
  updateMessage?: Maybe<Message>;
  deleteMessage?: Maybe<Message>;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
  condition?: InputMaybe<ModelMessageConditionInput>;
};


export type MutationUpdateMessageArgs = {
  input: UpdateMessageInput;
  condition?: InputMaybe<ModelMessageConditionInput>;
};


export type MutationDeleteMessageArgs = {
  input: DeleteMessageInput;
  condition?: InputMaybe<ModelMessageConditionInput>;
};

export enum PostType {
  Open = 'OPEN',
  Secret = 'SECRET'
}

export type Query = {
  __typename?: 'Query';
  getMessage?: Maybe<Message>;
  listMessages?: Maybe<ModelMessageConnection>;
  listMessageSortedByDate?: Maybe<ModelMessageConnection>;
};


export type QueryGetMessageArgs = {
  id: Scalars['ID'];
};


export type QueryListMessagesArgs = {
  filter?: InputMaybe<ModelMessageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListMessageSortedByDateArgs = {
  postType: PostType;
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelMessageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateMessage?: Maybe<Message>;
  onUpdateMessage?: Maybe<Message>;
  onDeleteMessage?: Maybe<Message>;
};

export type UpdateMessageInput = {
  id: Scalars['ID'];
  owner?: InputMaybe<Scalars['String']>;
  postType?: InputMaybe<PostType>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateMessageMutationVariables = Exact<{
  input: CreateMessageInput;
  condition?: InputMaybe<ModelMessageConditionInput>;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage?: { __typename?: 'Message', id: string, owner?: string | null | undefined, postType: PostType, text: string, updatedAt?: any | null | undefined, createdAt: any } | null | undefined };

export type UpdateMessageMutationVariables = Exact<{
  input: UpdateMessageInput;
  condition?: InputMaybe<ModelMessageConditionInput>;
}>;


export type UpdateMessageMutation = { __typename?: 'Mutation', updateMessage?: { __typename?: 'Message', id: string, owner?: string | null | undefined, postType: PostType, text: string, updatedAt?: any | null | undefined, createdAt: any } | null | undefined };

export type DeleteMessageMutationVariables = Exact<{
  input: DeleteMessageInput;
  condition?: InputMaybe<ModelMessageConditionInput>;
}>;


export type DeleteMessageMutation = { __typename?: 'Mutation', deleteMessage?: { __typename?: 'Message', id: string, owner?: string | null | undefined, postType: PostType, text: string, updatedAt?: any | null | undefined, createdAt: any } | null | undefined };

export type GetMessageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMessageQuery = { __typename?: 'Query', getMessage?: { __typename?: 'Message', id: string, owner?: string | null | undefined, postType: PostType, text: string, updatedAt?: any | null | undefined, createdAt: any } | null | undefined };

export type ListMessagesQueryVariables = Exact<{
  filter?: InputMaybe<ModelMessageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;


export type ListMessagesQuery = { __typename?: 'Query', listMessages?: { __typename?: 'ModelMessageConnection', nextToken?: string | null | undefined, items: Array<{ __typename?: 'Message', id: string, owner?: string | null | undefined, postType: PostType, text: string, updatedAt?: any | null | undefined, createdAt: any } | null | undefined> } | null | undefined };

export type ListMessageSortedByDateQueryVariables = Exact<{
  postType: PostType;
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelMessageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;


export type ListMessageSortedByDateQuery = { __typename?: 'Query', listMessageSortedByDate?: { __typename?: 'ModelMessageConnection', nextToken?: string | null | undefined, items: Array<{ __typename?: 'Message', id: string, owner?: string | null | undefined, postType: PostType, text: string, updatedAt?: any | null | undefined, createdAt: any } | null | undefined> } | null | undefined };

export type OnCreateMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateMessageSubscription = { __typename?: 'Subscription', onCreateMessage?: { __typename?: 'Message', id: string, owner?: string | null | undefined, postType: PostType, text: string, updatedAt?: any | null | undefined, createdAt: any } | null | undefined };

export type OnUpdateMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateMessageSubscription = { __typename?: 'Subscription', onUpdateMessage?: { __typename?: 'Message', id: string, owner?: string | null | undefined, postType: PostType, text: string, updatedAt?: any | null | undefined, createdAt: any } | null | undefined };

export type OnDeleteMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteMessageSubscription = { __typename?: 'Subscription', onDeleteMessage?: { __typename?: 'Message', id: string, owner?: string | null | undefined, postType: PostType, text: string, updatedAt?: any | null | undefined, createdAt: any } | null | undefined };


export const CreateMessageDocument = gql`
    mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
  createMessage(input: $input, condition: $condition) {
    id
    owner
    postType
    text
    updatedAt
    createdAt
  }
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const UpdateMessageDocument = gql`
    mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
  updateMessage(input: $input, condition: $condition) {
    id
    owner
    postType
    text
    updatedAt
    createdAt
  }
}
    `;
export type UpdateMessageMutationFn = Apollo.MutationFunction<UpdateMessageMutation, UpdateMessageMutationVariables>;

/**
 * __useUpdateMessageMutation__
 *
 * To run a mutation, you first call `useUpdateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMessageMutation, { data, loading, error }] = useUpdateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateMessageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMessageMutation, UpdateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMessageMutation, UpdateMessageMutationVariables>(UpdateMessageDocument, options);
      }
export type UpdateMessageMutationHookResult = ReturnType<typeof useUpdateMessageMutation>;
export type UpdateMessageMutationResult = Apollo.MutationResult<UpdateMessageMutation>;
export type UpdateMessageMutationOptions = Apollo.BaseMutationOptions<UpdateMessageMutation, UpdateMessageMutationVariables>;
export const DeleteMessageDocument = gql`
    mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
  deleteMessage(input: $input, condition: $condition) {
    id
    owner
    postType
    text
    updatedAt
    createdAt
  }
}
    `;
export type DeleteMessageMutationFn = Apollo.MutationFunction<DeleteMessageMutation, DeleteMessageMutationVariables>;

/**
 * __useDeleteMessageMutation__
 *
 * To run a mutation, you first call `useDeleteMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMessageMutation, { data, loading, error }] = useDeleteMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeleteMessageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMessageMutation, DeleteMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMessageMutation, DeleteMessageMutationVariables>(DeleteMessageDocument, options);
      }
export type DeleteMessageMutationHookResult = ReturnType<typeof useDeleteMessageMutation>;
export type DeleteMessageMutationResult = Apollo.MutationResult<DeleteMessageMutation>;
export type DeleteMessageMutationOptions = Apollo.BaseMutationOptions<DeleteMessageMutation, DeleteMessageMutationVariables>;
export const GetMessageDocument = gql`
    query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    owner
    postType
    text
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useGetMessageQuery__
 *
 * To run a query within a React component, call `useGetMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMessageQuery(baseOptions: Apollo.QueryHookOptions<GetMessageQuery, GetMessageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessageQuery, GetMessageQueryVariables>(GetMessageDocument, options);
      }
export function useGetMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessageQuery, GetMessageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessageQuery, GetMessageQueryVariables>(GetMessageDocument, options);
        }
export type GetMessageQueryHookResult = ReturnType<typeof useGetMessageQuery>;
export type GetMessageLazyQueryHookResult = ReturnType<typeof useGetMessageLazyQuery>;
export type GetMessageQueryResult = Apollo.QueryResult<GetMessageQuery, GetMessageQueryVariables>;
export const ListMessagesDocument = gql`
    query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      postType
      text
      updatedAt
      createdAt
    }
    nextToken
  }
}
    `;

/**
 * __useListMessagesQuery__
 *
 * To run a query within a React component, call `useListMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMessagesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListMessagesQuery(baseOptions?: Apollo.QueryHookOptions<ListMessagesQuery, ListMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMessagesQuery, ListMessagesQueryVariables>(ListMessagesDocument, options);
      }
export function useListMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMessagesQuery, ListMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMessagesQuery, ListMessagesQueryVariables>(ListMessagesDocument, options);
        }
export type ListMessagesQueryHookResult = ReturnType<typeof useListMessagesQuery>;
export type ListMessagesLazyQueryHookResult = ReturnType<typeof useListMessagesLazyQuery>;
export type ListMessagesQueryResult = Apollo.QueryResult<ListMessagesQuery, ListMessagesQueryVariables>;
export const ListMessageSortedByDateDocument = gql`
    query ListMessageSortedByDate($postType: PostType!, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
  listMessageSortedByDate(
    postType: $postType
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      owner
      postType
      text
      updatedAt
      createdAt
    }
    nextToken
  }
}
    `;

/**
 * __useListMessageSortedByDateQuery__
 *
 * To run a query within a React component, call `useListMessageSortedByDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMessageSortedByDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMessageSortedByDateQuery({
 *   variables: {
 *      postType: // value for 'postType'
 *      createdAt: // value for 'createdAt'
 *      sortDirection: // value for 'sortDirection'
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListMessageSortedByDateQuery(baseOptions: Apollo.QueryHookOptions<ListMessageSortedByDateQuery, ListMessageSortedByDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMessageSortedByDateQuery, ListMessageSortedByDateQueryVariables>(ListMessageSortedByDateDocument, options);
      }
export function useListMessageSortedByDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMessageSortedByDateQuery, ListMessageSortedByDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMessageSortedByDateQuery, ListMessageSortedByDateQueryVariables>(ListMessageSortedByDateDocument, options);
        }
export type ListMessageSortedByDateQueryHookResult = ReturnType<typeof useListMessageSortedByDateQuery>;
export type ListMessageSortedByDateLazyQueryHookResult = ReturnType<typeof useListMessageSortedByDateLazyQuery>;
export type ListMessageSortedByDateQueryResult = Apollo.QueryResult<ListMessageSortedByDateQuery, ListMessageSortedByDateQueryVariables>;
export const OnCreateMessageDocument = gql`
    subscription OnCreateMessage {
  onCreateMessage {
    id
    owner
    postType
    text
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useOnCreateMessageSubscription__
 *
 * To run a query within a React component, call `useOnCreateMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateMessageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateMessageSubscription, OnCreateMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateMessageSubscription, OnCreateMessageSubscriptionVariables>(OnCreateMessageDocument, options);
      }
export type OnCreateMessageSubscriptionHookResult = ReturnType<typeof useOnCreateMessageSubscription>;
export type OnCreateMessageSubscriptionResult = Apollo.SubscriptionResult<OnCreateMessageSubscription>;
export const OnUpdateMessageDocument = gql`
    subscription OnUpdateMessage {
  onUpdateMessage {
    id
    owner
    postType
    text
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useOnUpdateMessageSubscription__
 *
 * To run a query within a React component, call `useOnUpdateMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdateMessageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateMessageSubscription, OnUpdateMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnUpdateMessageSubscription, OnUpdateMessageSubscriptionVariables>(OnUpdateMessageDocument, options);
      }
export type OnUpdateMessageSubscriptionHookResult = ReturnType<typeof useOnUpdateMessageSubscription>;
export type OnUpdateMessageSubscriptionResult = Apollo.SubscriptionResult<OnUpdateMessageSubscription>;
export const OnDeleteMessageDocument = gql`
    subscription OnDeleteMessage {
  onDeleteMessage {
    id
    owner
    postType
    text
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useOnDeleteMessageSubscription__
 *
 * To run a query within a React component, call `useOnDeleteMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeleteMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeleteMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnDeleteMessageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeleteMessageSubscription, OnDeleteMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnDeleteMessageSubscription, OnDeleteMessageSubscriptionVariables>(OnDeleteMessageDocument, options);
      }
export type OnDeleteMessageSubscriptionHookResult = ReturnType<typeof useOnDeleteMessageSubscription>;
export type OnDeleteMessageSubscriptionResult = Apollo.SubscriptionResult<OnDeleteMessageSubscription>;