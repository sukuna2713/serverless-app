declare type AuthAction =
    | { type: 'ACCESS_START' }
    | { type: 'AUTHENTICATED' }
    | { type: 'NOT_AUTHENTICATED' }
    | { type: 'SIGNUP_SUCCESS', email: string, password: string }
    | { type: 'SIGNUP_FAILED', error: string }
    | { type: 'CONFILM_SUCCESS' }
    | { type: 'CONFILM_FAILED', error: string }
    | { type: 'SIGNIN_SUCCESS', email: string }
    | { type: 'SIGNIN_FAILED', error: string }
    | { type: 'SIGNOUT_SUCCESS' }
    | { type: 'SIGNOUT_FAILED', error: string }