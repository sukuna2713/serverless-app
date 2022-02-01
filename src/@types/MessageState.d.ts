declare type MessageState = {
    loading: boolean;
    error: string;
    messages: import('../generated/graphql-request').Message[];
}