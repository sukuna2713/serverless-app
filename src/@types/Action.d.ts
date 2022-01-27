declare type Action =
    | { type: 'ACCESS_START' }
    | { type: 'FETCH_SUCCESS', cities: import('../API').CreateCityInput[] }
    | { type: 'FETCH_ERROR', error: string }
    | { type: 'MUTATE_SUCCESS', city: import('../API').CreateCityInput }
    | { type: 'MUTATE_ERROR', error: string }