import { Button, Card, CardContent, CssBaseline, Grid, Stack, Typography } from "@mui/material"
import { BasicAppBar, ToolbarMargin } from "BasicAppBar";

type Props = {
    href: string;
    text: string;
    buttonText: string;
}

const LinkCard = (props: Props) => {
    return (
        <Grid item xs={4}>
            <Card
                sx={{ minWidth: 30 }}
                elevation={4}
            >
                <CardContent>
                    <Typography
                        sx={{ fontSize: 15 }}
                        color="text.primary"
                        gutterBottom
                    >
                        {props.text}
                    </Typography>
                    <Button
                        variant='contained'
                        color='primary'
                        href={props.href}
                    >
                        {props.buttonText}
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

const TopPage = () => {
    return (
        <div>
            <CssBaseline />
            <BasicAppBar />
            <ToolbarMargin />
            <Stack
                justifyContent="space-around"
                spacing={{ xs: 1, sm: 2 }}
            >
                <Grid container>

                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 2, md: 3 }}
                    sx={{ height: '70%' }}
                >
                    <LinkCard
                        href='/signin'
                        text='アカウントをお持ちの方はこちら'
                        buttonText='SIGNIN'
                    />
                    <LinkCard
                        href='/signup'
                        text='アカウントをお持ちでない方はこちら'
                        buttonText='SIGNUP'
                    />
                </Grid>
            </Stack>
        </div>
    )
}

export default TopPage;