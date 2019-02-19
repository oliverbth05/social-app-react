import server from '../api';

export const fetchUserProfile = id => {
    return dispatch => {
        dispatch({type: 'PROFILE_LOADING'})
        server.get(`/user/${id}`)
        .then(res => {
            dispatch({type: 'FETCH_PROFILE', payload: res.data})
            dispatch({type: '!PROFILE_LOADING'})
        })
        .catch(err => {
            
        })
    }
}

export const removePin = data => {
    return dispatch => {
        dispatch({type: 'PROFILE_LOADING'})
        server.delete(`/user/${data.user_id}/pins/${data.post_id}`)
        .then(res => {
            dispatch({type: 'REMOVE_PIN', payload: data})
            dispatch({type: '!PROFILE_LOADING'})
        })
        .catch(err => {
            
        })
    }
}