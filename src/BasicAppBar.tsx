import { AppBar, Box, Button, IconButton, styled, Toolbar, Typography } from "@mui/material"
import { Menu } from "@mui/icons-material"
import { useAuth } from "Auth/use-auth";
import { useNavigate } from "react-router-dom";

export const BasicAppBar = () => {
    const auth = useAuth();
    const navigate = useNavigate()
    const handleClick = () => {
        if (auth.isAuthenticated) {
            auth.signOut((result) => {
                if (result.isSuccessed) {
                    //トップページに遷移
                    navigate('/')
                }
            })
        } else {
            navigate('/signin');
        }
    }
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
                    <Button
                        color="inherit"
                        onClick={handleClick}
                    >
                        {auth.isAuthenticated ? 'SignOut' : 'SignIn'}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export const ToolbarMargin = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
    flexGrow: 1
}))