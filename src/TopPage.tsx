import { Button } from "@mui/material"
import { BasicAppBar, ToolbarMargin } from "BasicAppBar";

const TopPage = () => {
    return (
        <div>
            <BasicAppBar />
            <ToolbarMargin />
            <p>トップページ</p>
            <Button
                variant='outlined'
                color='primary'
                href='/chatpage'
            >
                MyPage
            </Button>
            <Button
                variant='outlined'
                color='primary'
                href='/signup'
            >
                SignUp
            </Button>
            <Button
                variant='outlined'
                color='primary'
                href='/signin'
            >
                SignIn
            </Button>
        </div>
    )
}

export default TopPage;