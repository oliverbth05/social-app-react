import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

const Author = (props) => {
    return (
        <div className = 'author'>
            <img alt='user-avatar' src={`https://api.adorable.io/avatars/130/${props.user_name}.png`} />
            <div>
                <p>Written by <Link className = 'inline' to = {`/profile/${props.user_id}`}>{props.user_name}</Link></p>
                <span>{new moment(props.date).fromNow()}</span>
            </div>
            
        </div>
    )
}

export default Author;