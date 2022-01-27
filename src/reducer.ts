import { match, select } from "ts-pattern";
export const reducer = (state: CityState, action: Action): CityState => (
    match<Action, CityState>(action)
        .with({ type: 'ACCESS_START' }, () => ({ ...state, loading: true }))
        //データ取得成功時
        .with({ type: 'FETCH_SUCCESS', cities: select() }, (selection) => ({
            ...state,
            loading: false,
            error: '',
            cities: selection,
        }))
        // データ取得失敗時
        .with({ type: 'FETCH_ERROR', error: select() }, (selection) => ({
            ...state,
            loading: false,
            error: selection,
        }))
        .with({ type: 'MUTATE_SUCCESS' }, () => ({
            ...state,
            loading: false,
            error: '',
        }))
        .with({ type: 'MUTATE_ERROR', error: select() }, (selection) => ({
            ...state,
            loading: false,
            error: selection,
        }))
        .with({ type: 'SUBSCRIPTION_SUCCESS', city: select() }, (selection) => ({
            ...state,
            loading: false,
            cities: [selection, ...state.cities]
        }))
        .with({ type: 'SUBSCRIPTION_ERROR', error: select() }, (selection) => ({
            ...state,
            loading: false,
            error: selection,
        }))
        .otherwise(() => {
            console.log('Reducer error')
            return state
        })
)