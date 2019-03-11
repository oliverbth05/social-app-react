import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Comment = (props) => {
    return (

        <div className = 'comment'>

            <img alt='user avatar' className='comment__avatar' src={'https://api.adorable.io/avatars/130/' + props.user_name + '.png'} />

            <div className = 'comment__main'>

                <div className = 'comment__details'>
                    <Link className='comment__user' to={'/profile/' + props.user_id}>{props.isUserOwned ? 'You' : props.user_name}</Link>
                    <span className='comment__date'>{moment(props.date).fromNow()}</span>
                </div>

                <p className = 'comment__body'>{props.body}</p>

                <div className = 'comment__options'>
                    {props.isUserOwned ? <Link className='inline' to={`/edit/comment/${props.post_id}/${props._id}`}>Edit</Link>: null}
                </div>

            </div>
        </div>
    )
}

export default Comment;