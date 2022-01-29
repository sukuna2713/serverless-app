import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Box, Button, styled } from '@mui/material';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useContext, useEffect, useState } from 'react';
import { CreateMessageInput, ListMessagesQuery, OnCreateMessageSubscription } from './API';
import { AppContext } from './AppContext';
import { createMessage } from './graphql/mutations';
import { listMessages } from './graphql/queries';
import { onCreateMessage } from './graphql/subscriptions';

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
 * 投稿されたときのサブスクリプションのイベント
 */
type PostSubscriptionEvent = { value: { data: OnCreateMessageSubscription } };

/**
 * スタイル適用済のコンポーネント
 */
const StyledBox = styled(Box)(({ theme }) => ({
    margin: 16,
    height: 504,
    overflow: 'auto'
}))

const Message = () => {
    // Reducerと入力欄の状態
    const { state, dispatch } = useContext(AppContext);
    const [input, setInput] = useState(initialInput);

    useEffect(() => {
        /**
     * 最初のデータ取得
     */
        const fetchMessages = async () => {
            try {
                dispatch({ type: 'ACCESS_START' })
                const messagesData = (
                    await API.graphql(graphqlOperation(listMessages))
                ) as GraphQLResult<ListMessagesQuery>
                if (messagesData.data?.listMessages?.items) {
                    const messages = messagesData.data.listMessages.items as CreateMessageInput[]
                    dispatch({ type: 'FETCH_SUCCESS', messages: messages })
                } else {
                    // データがない場合
                    dispatch({ type: 'FETCH_SUCCESS', messages: [] })
                }
            } catch (err) {
                console.log('Error fetching messages:', err)
                dispatch({ type: 'FETCH_ERROR', error: `Error fetching messages: ${err}` })
            }
        }

        /**
         * City追加イベントの購読
         */
        const subscribeMessages = async () => {
            try {
                dispatch({ type: 'ACCESS_START' })
                const client = API.graphql(graphqlOperation(onCreateMessage))
                // Observerなら購読開始
                if ('subscribe' in client) {
                    client.subscribe({
                        next: ({ value: { data } }: PostSubscriptionEvent) => {
                            if (data.onCreateMessage) {
                                const message: CreateMessageInput = data.onCreateMessage;
                                dispatch({ type: 'SUBSCRIPTION_SUCCESS', message: message });
                            }
                        }
                    })
                }
            } catch (err) {
                console.log('Error subscribing messages:', err)
                dispatch({ type: 'SUBSCRIPTION_ERROR', error: `Error subscribing messages: ${err}` })
            }
        }
        fetchMessages();
        subscribeMessages();
    }, [dispatch])

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
            (await API.graphql(graphqlOperation(createMessage, { input: message }))) as GraphQLResult<CreateMessageInput>;
            dispatch({ type: 'MUTATE_SUCCESS' });
        } catch (err) {
            console.log('Error adding message:', err);
            dispatch({ type: 'MUTATE_ERROR', error: `Error adding message: ${err}` })
        }
    }

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
                {state.messages.map((message, index) => (
                    <Box
                        key={message.id ? message.id : index}
                    >
                        <p>{message.name}</p>
                        <p>{message.text}</p>
                    </Box>
                ))}
            </StyledBox>
        </div>
    )
}

export default Message;