import React from 'react';
import { Link } from 'react-router-dom';

const Sub = (props) => {
    return (
        <div className = 'sub-card'>
            <img alt = 'user avatar' className='' src={`https://api.adorable.io/avatars/130/${props.creator.userName}.png`} />
            <Link to = {`/profile/${props.creator._id}`}>{props.creator.userName}</Link>
            <button onClick = {() => {props.removeSub({subscriberId: props.subscriberId, creatorId: props.creator._id})}}className = 'btn btn-primary btn-round'>Unsubscribe</button>
        </div>
    )
}

export default Sub;
