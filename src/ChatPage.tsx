import { Box, Button, styled } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';
import { CreateMessageInput, Message, PostType, useListMessageSortedByDateQuery, ModelSortDirection, useCreateMessageMutation, useOnCreateMessageSubscription } from 'generated/graphql-request';
/**
 * 入力欄の状態
 */
type inputState = {
    text: string;
}

const initialInput: inputState = {
    text: '',
}

/**
 * スタイル適用済のコンポーネント
 */
const StyledBox = styled(Box)(() => ({
    margin: 16,
    height: 504,
    overflow: 'auto'
}))

const ChatPage = () => {
    // Reducerと入力欄の状態
    const { state, dispatch } = useContext(AppContext);
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

    const handleOnChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, text: e.target.value });
    }

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

    const messages = state.messages ? (
        state.messages.map((message) => (
            <Box
                key={message.id}
            >
                <p>{message.owner}</p>
                <p>{message.text}</p>
            </Box>
        ))
    ) : (
        <div>メッセージがありません</div>
    )

    return (
        <div>
            <Box>
                <input
                    onChange={(e) => handleOnChangeText(e)}
                    value={input.text}
                    placeholder='メッセージ'
                />
                <Button onClick={addMessage}>投稿</Button>
            </Box>
            <StyledBox>
                {messages}
            </StyledBox>
        </div>
    )
}

export default ChatPage;