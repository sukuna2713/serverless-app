declare type Action =
    | { type: 'ACCESS_START' }
    | { type: 'FETCH_SUCCESS', messages: import('../generated/graphql-request').Message[] }
    | { type: 'FETCH_ERROR', error: string }
    | { type: 'MUTATE_SUCCESS' }
    | { type: 'MUTATE_ERROR', error: string }
    | { type: 'SUBSCRIPTION_SUCCESS', message: import('../generated/graphql-request').Message }
    | { type: 'SUBSCRIPTION_ERROR', error: string }