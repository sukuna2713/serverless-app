declare type AuthState = {
    isLoading: boolean;
    isAuthenticated: boolean;
    user?: import('amazon-cognito-identity-js').CognitoUser;
    username: string;
    email: string;
    password: string;
    error: string;
}