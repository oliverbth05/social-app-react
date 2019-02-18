import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

const Author = (props) => {
    return (
        <div className = 'author'>
            <p>Written by <Link className = 'inline' to = {`/profile/${props.user_id}`}>{props.user_name}</Link></p>
            <span>{moment(props.date).fromNow()}</span>
        </div>
    )
}

export default Author;