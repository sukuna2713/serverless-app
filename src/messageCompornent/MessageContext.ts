import { createContext, Dispatch } from 'react'

export const MessageContext = createContext(
    {} as {
        messageState: MessageState;
        dispatch: Dispatch<Action>
    }
)