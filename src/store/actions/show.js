import server from '../../api';

export const fetchPost = (id) => {
    return dispatch => {
        server.get(`/post/${id}`)
            .then(res => {
                dispatch({
                    type: 'FETCH_POST',
                    payload: res.data
                })

            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const likePost = (post_id, user_id) => {
    return dispatch => {
        dispatch({
            type: 'LIKE_LOADING'
        })
        server.post(`/post/${post_id}/like`, { user_id })
            .then(res => {
                dispatch({
                    type: 'LIKE_POST',
                    payload: user_id
                })
                dispatch({ type: '!LIKE_LOADING' })
            })
            .catch(err => {

            })
    }
}

export const pinPost = (post_id, user_id, post_title) => {
    return dispatch => {
        dispatch({ type: 'PIN_LOADING' })
        server.post(`/user/${user_id}/pins`, { post_id, post_title })
            .then(res => {
                dispatch({
                    type: 'PIN_POST',
                    payload: {
                        post_id,
                        post_title,
                        pin_date: new Date()
                    }
                })
                dispatch({ type: '!PIN_LOADING' })
            })
            .catch(err => {

            })
    }
} 