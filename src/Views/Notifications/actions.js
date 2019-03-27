import server from '../../api';

export const fetchNotifications = user_id => dispatch => {
    dispatch({ type: 'NOTIFICATIONS_LOADING' })
    server.get(`/user/${user_id}/notifications`)
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
