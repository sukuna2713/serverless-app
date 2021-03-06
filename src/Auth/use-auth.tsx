import React, { useEffect, useContext, createContext, useReducer } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify';
import { reducer } from './reducer';
import { initiateState } from './initiateState';

/**
 * 認証画面に必要な要素のインターフェイス
 */
interface UseAuth {
    isLoading: boolean
    isAuthenticated: boolean
    user?: CognitoUser
    username: string
    email: string
    signUp: (
        username: string,
        email: string,
        password: string,
        callback: (r: Result) => void
    ) => void
    confirmSignUp: (
        verificationCode: string,
        callback: (r: Result) => void
    ) => void
    signIn: (
        username: string,
        password: string,
        callback: (r: Result) => void
    ) => void
    signOut: (callback: (r: Result) => void) => void
}

export interface Result {
    isSuccessed: boolean
    message: string
}

const authContext = createContext({} as UseAuth)

export const ProvideAuth: React.FC = ({ children }) => {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

/**
 * 通常の認証ロジック
 */
const useProvideAuth = (): UseAuth => {
    const [state, dispatch] = useReducer(reducer, initiateState)

    useEffect(() => {
        // 最初の認証確認
        const checkAuthenticated = () => {
            dispatch({ type: 'ACCESS_START' });
            Auth.currentAuthenticatedUser()
                .then((user: CognitoUser) => {
                    // ログイン済みのとき
                    dispatch({ type: 'GOT_CURRENT_USER', user: user })
                })
                .catch(() => {
                    // 未ログインのとき
                    dispatch({ type: 'NOT_AUTHENTICATED' })
                })
        }

        // 現在のユーザ情報を取得
        const currentAuthenticatedUser = async (): Promise<void> => {
            const user: CognitoUser = await Auth.currentAuthenticatedUser();
            if (user) dispatch({ type: 'GOT_CURRENT_USER', user: user })
        }

        checkAuthenticated();
        //currentAuthenticatedUser();

    }, [dispatch])

    const signUp = (
        username: string,
        email: string,
        password: string,
        callback: (r: Result) => void
    ) => {
        Auth.signUp({
            username: username,
            password: password,
            attributes: {
                email: email,
            }
        })
            .then((result) => {
                dispatch({ type: 'SIGNUP_SUCCESS', user: result.user, username: username, email: email, password: password })
                callback({ isSuccessed: true, message: '' })
            })
            .catch(() => {
                dispatch({ type: 'SIGNUP_FAILED', error: 'failed to sign up' })
                callback({
                    isSuccessed: false,
                    message: 'failed to sign up.',
                })
            })
    }

    const confirmSignUp = (
        verificationCode: string,
        callback: (r: Result) => void
    ) => {
        Auth.confirmSignUp(state.username, verificationCode)
            .then(() => {
                signIn(state.username, state.password, callback)
                dispatch({ type: 'CONFILM_SUCCESS' })
            })
            .catch(() => {
                dispatch({ type: 'CONFILM_FAILED', error: 'failed to confilm verification code' })
                callback({
                    isSuccessed: false,
                    message: 'failed to confilm verification code',
                })
            })
    }

    const signIn = (
        username: string,
        password: string,
        callback: (r: Result) => void
    ) => {
        Auth.signIn(username, password)
            .then(() => {
                dispatch({ type: 'SIGNIN_SUCCESS', username: username })
                callback({ isSuccessed: true, message: '' })
            })
            .catch(() => {
                dispatch({ type: 'SIGNIN_FAILED', error: 'failed to sign in' })
                callback({
                    isSuccessed: false,
                    message: 'failed to sign in',
                })
            })
    }

    const signOut = (callback: (r: Result) => void) => {
        Auth.signOut()
            .then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS' })
                callback({ isSuccessed: true, message: '' })
            })
            .catch(() => {
                dispatch({ type: 'SIGNOUT_FAILED', error: 'failed to sign out' })
                callback({
                    isSuccessed: false,
                    message: 'failed to sign out.',
                })
            })
    }

    return {
        isLoading: state.isLoading,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        username: state.username,
        email: state.email,
        signUp,
        confirmSignUp,
        signIn,
        signOut,
    }
}