import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { MessageContext } from "./MessageContext"
import { useAuth } from "Auth/use-auth";
import { Message } from "generated/graphql-request";
import { useContext } from "react"

type Props = {
    message: Message
}

const MessageCard = (props: Props) => {
    return (
        <Card
            sx={{ minWidth: 30 }}
            elevation={4}
        >
            <CardContent>
                <Typography
                    sx={{ fontSize: 15 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {props.message.owner}
                </Typography>
                <Typography variant='body2'>
                    {props.message.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export const MessageBox = () => {
    const { messageState } = useContext(MessageContext);
    const auth = useAuth()

    const isOwned = (message: Message) => (
        message.owner && message.owner === auth.username
    )

    const messages = messageState.messages ? (
        messageState.messages.map((message) => (
            <Grid
                item
                xs={6}
                key={message.id}
                alignSelf={isOwned(message) ? "flex-end" : "flex-start"}
            >
                <MessageCard message={message} />
            </Grid>
        ))
    ) : (
        <div>メッセージがありません</div>
    )

    return (
        <Box
            sx={{ pb: 7 }}
        >
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={{ xs: 2, md: 3 }}
            >
                {messages}
            </Stack>
        </Box>
    )
}