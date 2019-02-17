import React from 'react';
import moment from 'moment';

const Author = (props) => {
    return (
        <div className = 'author m-t-3'>
            <p>Written by {props.user_name}</p>
            <span>{moment(props.date).fromNow()}</span>
        </div>
    )
}

export default Author;