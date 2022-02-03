import { Container } from '@mui/material';
import { useReducer, useState } from 'react';
import { MessageContext } from './MessageContext';
import { CreateMessageInput, Message, PostType, useListMessageSortedByDateQuery, ModelSortDirection, useCreateMessageMutation, useOnCreateMessageSubscription } from 'generated/graphql-request';
import { MessageBox } from './MessageBox';
import { initialInput, initialMessage } from './initialState';
import { reducer } from './reducer';
import { InputContext } from './InputContext';
import { SubmitBox } from './SubmitBox';
import { BasicAppBar, ToolbarMargin } from 'BasicAppBar';

const ChatPage = () => {
    // Reducerと入力欄の状態
    const [state, dispatch] = useReducer(reducer, initialMessage)
    const [input, setInput] = useState(initialInput);
    // クエリ操作関係のフック
    const query = useListMessageSortedByDateQuery({
        variables: {
            postType: PostType.Open,
            sortDirection: ModelSortDirection.Asc,
        },
        onCompleted: (data) => {
            const messages = data.listMessageSortedByDate?.items ? (
                data.listMessageSortedByDate.items as Message[]
            ) : ([] as Message[])
            dispatch({ type: 'FETCH_SUCCESS', messages: messages })
        },
    })
    // データの変更関係のフック
    const [addMessageHook] = useCreateMessageMutation()
    // データ購読のフック
    const subscription = useOnCreateMessageSubscription({
        onSubscriptionData: ({ client, subscriptionData }) => {
            if (subscriptionData.data?.onCreateMessage) {
                dispatch({ type: 'SUBSCRIPTION_SUCCESS', message: subscriptionData.data.onCreateMessage })
            }
        }
    })

    const addMessage = async () => {
        try {
            if (!input.text) return;
            const message: CreateMessageInput = { ...input, postType: PostType.Open };
            setInput(initialInput);
            addMessageHook({ variables: { input: message } })
            dispatch({ type: 'MUTATE_SUCCESS' });
        } catch (err) {
            console.log('Error adding message:', err);
            dispatch({ type: 'MUTATE_ERROR', error: `Error adding message: ${err}` })
        }
    }
    if (query.loading) {
        return <div>Loading...</div>
    } else if (query.error) {
        return <div>{query.error.message}</div>
    }

    return (
        <MessageContext.Provider value={{ messageState: state, dispatch }}>
            <BasicAppBar />
            <ToolbarMargin />
            <Container maxWidth="lg" sx={{ overflow: 'auto', maxHeight: '75%' }}>
                <MessageBox />
            </Container>
            <InputContext.Provider value={{ input, setInput }}>
                <SubmitBox onClick={addMessage} />
            </InputContext.Provider>
        </MessageContext.Provider>
    )
}

export default ChatPage;