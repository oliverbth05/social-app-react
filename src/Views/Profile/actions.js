import server from '../../api';

export const fetchUserProfile = id => dispatch => {
    dispatch({ type: 'PROFILE_LOADING' })
    server.get(`/user/${id}`)
        .then(res => {
            dispatch({ type: 'FETCH_PROFILE', payload: res.data })
            dispatch({ type: '!PROFILE_LOADING' })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
            dispatch({ type: 'PROFILE_ERROR' })
            dispatch({ type: '!PROFILE_LOADING' })

        })
}

export const fetchUserProfilePosts = id => dispatch => {
    dispatch({ type: 'PROFILE_POSTS_LOADING' })
    server.get(`/user/${id}/posts`)
        .then(res => {
            dispatch({ type: 'FETCH_PROFILE_POSTS', payload: res.data })
            dispatch({ type: '!PROFILE_POSTS_LOADING' })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }

            dispatch({ type: 'PROFILE_POSTS_ERROR' })
            dispatch({ type: '!PROFILE_POSTS_LOADING' })
        })
}

export const removePin = data => dispatch => {
    console.log(data)
    server.delete(`/user/${data.userId}/pins/${data.postId}`)
        .then(res => {
            dispatch({ type: 'REMOVE_PIN', payload: data })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
        })
}

export const addSubscription = data => dispatch => {
    console.log(data)
    dispatch({ type: 'SUBSCRIBE_LOADING' })
    server.post(`/user/${data.subscriber._id}/subscriptions/${data.creator._id}`, data)
        .then(res => {
            dispatch({ type: 'ADD_SUB', payload: data })
            dispatch({ type: '!SUBSCRIBE_LOADING' })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
        })
}

export const removeSubscription = data => dispatch => {
    dispatch({ type: 'SUBSCRIBE_LOADING' })
    server.delete(`/user/${data.subscriberId}/subscriptions/${data.creatorId}`)
        .then(res => {
            dispatch({ type: 'REMOVE_SUB', payload: data })
            dispatch({ type: '!SUBSCRIBE_LOADING' })
        })
        .catch(err => {
            if (err.response) {
                if (err.response.status === 401) {
                    dispatch({ type: 'TOKEN_ERROR' });
                    dispatch({ type: 'LOGOUT' })
                }
            }
            dispatch({ type: '!SUBSCRIBE_LOADING' })
        })
}
