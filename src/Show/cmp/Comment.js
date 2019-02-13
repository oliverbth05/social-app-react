import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Comment = (props) => {
        return (
            <div className = 'comment'>
                <div className = 'comment__top'>
                    <img alt = 'user avatar' className = 'comment__avatar' src = {'https://api.adorable.io/avatars/130/' + props.user_name + '.png'} />
                    <p className = 'comment__body'>{props.body}</p>
                </div>
                
                <div className = 'comment__info'>
                    <Link className = 'inline m-r-1' to = {'/user/' + props.user_id}>{props.user_name}</Link>
                    <span className = 'font-light'>{moment(props.date).fromNow()}</span>
                </div>
            </div>
        )
}

export default Comment;