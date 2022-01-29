import { CreateMessageInput } from "API";

export const initiateState: MessageState = {
    loading: false,
    error: '',
    messages: [] as CreateMessageInput[]
}