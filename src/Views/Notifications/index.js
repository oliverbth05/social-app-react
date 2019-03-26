import React from 'react';
import { connect } from 'react-redux';
import IsAuthenticated from '../../components/hoc/IsAuthenticated';
import { fetchNotifications, updateNotification } from './actions';
import Loader from '../../components/ui/Loader';
import Notification from './cmp/Notification';

class Notifications extends React.Component {
    
    componentDidMount() {
        this.props.fetchNotifications(this.props.user._id)
    }
    
    updateNotification(id) {
        this.props.updateNotification({user_id: this.props.user._id, notification_id: id})
    }
    
    renderUnreadNotifications(notifications) {
        return notifications.map(item => {
            return <Notification {...item} update = {this.updateNotification.bind(this)}/>
        })
    }
    
    renderReadNotifications(notifications) {
        return notifications.map(item => {
            return <Notification {...item} />
        })
    }
    
    render() {
        
        if (this.props.loading || !this.props.read || !this.props.unread) {
            return <Loader fullscreen />
        }
        
        return (
            <div className = 'container-1000'>
                <p className = 'alert color-primary text-center m-b-1'>This feature is still in development</p>
                <h3 className = 'font-normal p-b-1'>Notifications</h3>
                <h4 className = 'font-normal p-t-1'>New</h4>
                {this.renderUnreadNotifications(this.props.unread)}
                <h4 className = 'font-normal p-t-1'>Older</h4>
                {this.renderReadNotifications(this.props.read)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.userData,
        loading: state.notifications.loading,
        notifications: state.notifications.notifications,
        firstLoaded: state.notifications.firstLoaded,
        read: state.notifications.read,
        unread: state.notifications.unread
    }
}

export default connect(mapStateToProps, {fetchNotifications, updateNotification})(IsAuthenticated(Notifications));