declare type MessageState = {
    loading: boolean;
    error: string;
    messages: import('../API').CreateMessageInput[];
}