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
        .with({ type: 'SIGNUP_SUCCESS', email: select('email'), password: select('password') }, (selection) => ({
            ...state,
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
        .with({ type: 'SIGNIN_SUCCESS', email: select() }, (selection) => ({
            ...state,
            email: selection,
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