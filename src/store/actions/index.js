import server from '../../api';
import axios from 'axios';

export const login = (email, password) => {
    return dispatch => {
        dispatch(loading())
        server.post('/login', {email, password})
        .then(res => {
            dispatch({
                type: 'LOGIN',
                payload: {
                    token: res.data.token,
                    user: res.data.user
                }
            })
            dispatch(nloading())
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const register = (data) => {
    return dispatch => {
        dispatch(loading())
        server.post('/register', {data})
        .then(res => {
            
        })
        .catch(err => {
            
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

export const fetchPosts = () => {
    return dispatch => {
        dispatch(loading())
        server.get('/posts')
        .then(res => {
            dispatch({
                type: 'FETCH_POSTS',
                payload: res.data
            })
            dispatch(nloading())
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const fetchPost = (id) => {
    return dispatch => {
        dispatch(loading())
        server.get(`/post/${id}`)
        .then(res => {
            dispatch({
                type: 'FETCH_POST',
                payload: res.data
            })
            dispatch(nloading())
        })
        .catch(err => {
            console.log(err)
        })
    }
}

