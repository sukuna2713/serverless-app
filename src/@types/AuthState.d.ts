declare type AuthState = {
    isLoading: boolean;
    isAuthenticated: boolean;
    username: string;
    email: string;
    password: string;
    error: string;
}