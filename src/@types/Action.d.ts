declare type Action =
    | { type: 'ACCESS_START' }
    | { type: 'FETCH_SUCCESS', cities: import('../API').CreateCityInput[] }
    | { type: 'FETCH_ERROR', error: string }
    | { type: 'MUTATE_SUCCESS' }
    | { type: 'MUTATE_ERROR', error: string }
    | { type: 'SUBSCRIPTION_SUCCESS', city: import('../API').CreateCityInput }
    | { type: 'SUBSCRIPTION_ERROR', error: string }