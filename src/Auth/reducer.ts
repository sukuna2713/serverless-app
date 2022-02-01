import { match, select } from "ts-pattern";
export const reducer = (state: AuthState, action: AuthAction): AuthState => (
    match<AuthAction, AuthState>(action)
        .with({ type: 'ACCESS_START' }, () => ({
            ...state,
            isLoading: true,
        }))
        .with({ type: 'AUTHENTICATED' }, () => ({
            ...state,
            isLoading: false,
            isAuthenticated: true,
        }))
        .with({ type: 'NOT_AUTHENTICATED' }, () => ({
            ...state,
            isLoading: false,
            isAuthenticated: false,
        }))
        .with({ type: 'SIGNUP_SUCCESS', user: select('user'), username: select('username'), email: select('email'), password: select('password') }, (selection) => ({
            ...state,
            user: selection.user,
            username: selection.username,
            email: selection.email,
            password: selection.password,
            error: '',
        }))
        .with({ type: 'SIGNUP_FAILED', error: select() }, (selection) => ({
            ...state,
            error: selection,
        }))
        .with({ type: 'CONFILM_SUCCESS' }, () => ({
            ...state,
            password: '',
            error: '',
        }))
        .with({ type: 'CONFILM_FAILED', error: select() }, (selection) => ({
            ...state,
            password: '',
            error: selection,
        }))
        .with({ type: 'GOT_CURRENT_USER', user: select() }, (selection) => ({
            ...state,
            user: selection,
        }))
        .with({ type: 'SIGNIN_SUCCESS', username: select() }, (selection) => ({
            ...state,
            username: selection,
            isAuthenticated: true,
            error: '',
        }))
        .with({ type: 'SIGNIN_FAILED', error: select() }, (selection) => ({
            ...state,
            error: selection,
        }))
        .with({ type: 'SIGNOUT_SUCCESS' }, () => ({
            ...state,
            email: '',
            isAuthenticated: false,
        }))
        .with({ type: 'SIGNOUT_FAILED', error: select() }, (selection) => ({
            ...state,
            error: selection,
        }))
        .otherwise(() => {
            console.log('Reducer error');
            return state;
        })
)