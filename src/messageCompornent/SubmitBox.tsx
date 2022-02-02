import { useContext } from "react";
import { InputContext } from "./InputContext";
import { Box, Button, Grid, TextField } from "@mui/material";

type Props = {
    onClick: () => void
}

export const SubmitBox = (prop: Props) => {
    const { input, setInput } = useContext(InputContext)

    const handleOnChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({ ...input, text: e.target.value });
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, md: 3 }}
        >
            <Grid item xs="auto">
                <TextField
                    id="message-submit-form"
                    label="メッセージ"
                    multiline
                    maxRows={6}
                    onChange={(e) => handleOnChangeText(e)}
                    value={input.text}
                    placeholder='メッセージを入力してください'
                />
            </Grid>
            <Grid item xs="auto" >
                <Button
                    onClick={prop.onClick}
                    variant='contained'
                >
                    投稿
                </Button>
            </Grid>
        </Grid>
    )
}