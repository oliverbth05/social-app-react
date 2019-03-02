import server from '../api';

export const fetchEditPost = id => {
    return dispatch => {
        dispatch({type: 'EDIT_POST_LOADING'})
        server.get(`/post/${id}`)
        .then(res => {
            dispatch({type: 'FETCH_EDIT_POST', payload: res.data})
            dispatch({type: '!EDIT_POST_LOADING'})
        })
        .catch(err => {
            dispatch({type: '!EDIT_POST_LOADING'})
        })
    }
}

export const updatePost = (data, ownProps) => { //ownProps contains the react-router history object for rerouting
    return dispatch => {
        dispatch({type: 'EDIT_POST_LOADING'})
        server.patch(`/post/${data._id}`, data)
        .then(res => {
            dispatch({type: 'HOME_NEEDS_UPDATE'})
            dispatch({type: '!EDIT_POST_LOADING'})
            ownProps.history.push(`/show/${data._id}`);
        })
        .catch(err => {
            dispatch({type: '!EDIT_POST_LOADING'})
            console.log(err)
        })
    }
}

export const deletePost = (data, ownProps) => {
    return dispatch => {
        dispatch({type: 'EDIT_POST_LOADING'})
        server.delete(`/post/${data._id}?token=${data.token}`)
        .then(res => {
            dispatch({type: 'HOME_NEEDS_UPDATE'})
            dispatch({type: '!EDIT_POST_LOADING'})
            ownProps.history.push('/home');
        })
        .catch(err => {
            dispatch({type: '!EDIT_POST_LOADING'})
            console.log(err)
        })
    }
}

export const resetEditPost = () => {
    return {
        type: 'RESET_EDIT_POST'
    }
}