import { Box, Button, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import { CreateMessageDocument, CreateMessageInput, ListMessagesDocument, Message, OnCreateMessageDocument } from 'generated/graphql-request';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
/**
 * 入力欄の状態
 */
type inputState = {
    name: string;
    text: string;
}

const initialInput: inputState = {
    name: '',
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
    const query = useQuery(ListMessagesDocument, {
        onCompleted: (data) => {
            const messages = data.listMessages?.items ? (
                data.listMessages.items as Message[]
            ) : ([] as Message[])
            dispatch({ type: 'FETCH_SUCCESS', messages: messages })
        }
    });
    // データの変更関係のフック
    const [mutateMessage] = useMutation(CreateMessageDocument);
    // データ購読のフック
    const subscription = useSubscription(OnCreateMessageDocument, {
        onSubscriptionData: ({ client, subscriptionData }) => {
            if (subscriptionData.data?.onCreateMessage) {
                dispatch({ type: 'SUBSCRIPTION_SUCCESS', message: subscriptionData.data.onCreateMessage })
            }
        }
    });

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, name: e.target.value });
    }

    const handleOnChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, text: e.target.value });
    }

    const addMessage = async () => {
        try {
            if (!input.name || !input.text) return;
            const message: CreateMessageInput = { ...input };
            setInput(initialInput);
            mutateMessage({ variables: { input: message } })
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
                <p>{message.name}</p>
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
                    onChange={(e) => handleOnChangeName(e)}
                    value={input.name}
                    placeholder='名前'
                />
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