import { Message } from "generated/graphql-request";

export const initiateState: MessageState = {
    loading: false,
    error: '',
    messages: [] as Message[]
}