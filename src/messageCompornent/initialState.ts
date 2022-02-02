import { Message } from "generated/graphql-request";

export const initialMessage: MessageState = {
    loading: false,
    error: '',
    messages: [] as Message[]
}

export const initialInput: InputState = {
    text: '',
}