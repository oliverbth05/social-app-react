import React from 'react';
import { Link } from 'react-router-dom';

const Sub = (props) => {
    console.log(props)
    return (
        <div className = 'sub-card'>
            <img alt = 'user avatar' className='' src={`https://api.adorable.io/avatars/130/${props.creator_name}.png`} />
            <Link to = {`/profile/${props.creator_id}`}>{props.creator_name}</Link>
            <button onClick = {() => {props.removeSub({subscriber_id: props.subscriber_id, creator_id: props.creator_id})}}className = 'btn btn-primary btn-round'>Unsubscribe</button>
        </div>
    )
}

export default Sub;