import { createContext, Dispatch } from 'react'
export const AppContext = createContext(
    {} as { state: CityState; dispatch: Dispatch<Action> }
)