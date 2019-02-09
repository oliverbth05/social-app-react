import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostCard = (props) => {
    return (
        <Link to = {`/show/${props._id}`} class = 'card'>
            <h4 class = 'card__title'>{props.title}</h4>
            <p>{props.user_name}</p>
            <p>{ moment(props.date).fromNow()}</p>
            <p><i class = "far fa-eye"></i> {props.views}</p>
            <p><i class = "far fa-thumbs-up"></i> {props.likes.length}</p>
        </Link>
    )
}

export default PostCard;