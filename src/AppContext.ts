import { createContext, Dispatch } from 'react'
export const AppContext = createContext(
    {} as { state: MessageState; dispatch: Dispatch<Action> }
)