declare type AuthAction =
    | { type: 'ACCESS_START' }
    | { type: 'AUTHENTICATED' }
    | { type: 'NOT_AUTHENTICATED' }
    | { type: 'GOT_CURRENT_USER', user: import('amazon-cognito-identity-js').CognitoUser }
    | { type: 'SIGNUP_SUCCESS', user: import('amazon-cognito-identity-js').CognitoUser, username: string, email: string, password: string }
    | { type: 'SIGNUP_FAILED', error: string }
    | { type: 'CONFILM_SUCCESS' }
    | { type: 'CONFILM_FAILED', error: string }
    | { type: 'SIGNIN_SUCCESS', username: string }
    | { type: 'SIGNIN_FAILED', error: string }
    | { type: 'SIGNOUT_SUCCESS' }
    | { type: 'SIGNOUT_FAILED', error: string }