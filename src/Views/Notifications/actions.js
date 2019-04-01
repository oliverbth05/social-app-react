import server from '../../api';

export const fetchNotifications = userId => dispatch => {
    dispatch({ type: 'NOTIFICATIONS_LOADING' })
    server.get(`/user/${userId}/notifications`)
        .then(res => {
            dispatch({
                type: 'FETCH_NOTIFICATIONS',
                payload: res.data
            })
            dispatch({ type: '!NOTIFICATIONS_LOADING' })
        })
        .catch(err => {

        })
}

export const updateNotification = data => dispatch => {
    server.patch(`/user/${data.user_id}/notifications/${data.notification_id}`)
        .then(res => {
            dispatch({ type: 'UPDATE_NOTIFICATION', payload: data.notification_id })
        })
        .catch(err => {

        }) 
}
