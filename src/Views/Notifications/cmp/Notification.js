import React from 'react';
import moment from 'moment';

const Notification = props => {
    
    if (props.update) {
        return (
            <div className = 'notification' onClick = {() => {props.update(props._id)}}>
                <div>
                    <h4>{props.title}</h4>
                    <p className = 'm-b-s'>{props.body}</p>
                    <span className = 'font-small font-light' >{new moment(props.date).fromNow()}</span>
                </div>
                <i class="far fa-dot-circle color-primary"></i>
            </div>
        )
    }
    
    return (
        <div className = 'notification'>
            <div>
                <h4>{props.title}</h4>
                <p className = 'm-b-s'>{props.body}</p>
                <span className = 'font-small font-light'>{new moment(props.date).fromNow()}</span>
            </div>
        </div>
    )
    
    
}

export default Notification;