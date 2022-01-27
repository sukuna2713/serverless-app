import { Button } from "@mui/material"

const TopPage = () => {
    return (
        <div>
            <p>トップページ</p>
            <Button
                variant='outlined'
                color='primary'
                href='/mypage'
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