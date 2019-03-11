import server from '../api';

export const login = (email, password) => {
    return dispatch => {
        dispatch({ type: 'LOGIN_LOADING' })
        server.post('/login', { email, password })
            .then(res => {
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        token: res.data.token,
                        user: res.data.user
                    }
                })
                dispatch({ type: '!LOGIN_LOADING' })
                dispatch({type: '!TOKEN_ERROR'})
                dispatch({ type: '!LOGIN_ERROR' })
            })
            .catch(err => {
                
                dispatch({ type: '!LOGIN_LOADING' })
                dispatch({ type: 'LOGIN_ERROR', payload: err.response.data.error })
            })
    }
}

export const keepLoggedIn = (data) => {
    return {
        type: 'KEEP_LOGGED_IN',
        payload: data
    }
}

export const resetToken = () => {
    return {
        type: 'RESET_TOKEN'
    }
}

export const register = (data) => {
    return dispatch => {
        dispatch({ type: 'REGISTER_LOADING' })
        server.post('/register', data)
            .then(res => {
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        token: res.data.token,
                        user: res.data.user
                    }
                })
                dispatch({ type: '!REGISTER_ERROR' })
                dispatch({ type: '!REGISTER_LOADING' })
            })
            .catch(err => {
                dispatch({ type: 'REGISTER_ERROR', payload: err.response.data.error })
                dispatch({ type: '!REGISTER_LOADING' })
            })
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const loading = () => {
    return {
        type: 'LOADING'
    }
}

export const nloading = () => {
    return {
        type: '!LOADING'
    }
}


