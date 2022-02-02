import { AppBar, Box, Button, IconButton, styled, Toolbar, Typography } from "@mui/material"
import { Menu } from "@mui/icons-material"

export const BasicAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        チャットアプリ
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export const ToolbarMargin = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
    flexGrow: 1
}))