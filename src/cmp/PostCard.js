import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostCard = (props) => {
    console.log(props.isPinned)
    return (
        <Link to = {`/show/${props._id}`} className = 'card'>
            <h4 className = 'card__title'>{props.title}</h4>
            <p>{props.user_name}</p>
            <p className = 'font-light'>{ moment(props.date).fromNow()}</p>
            <p className = 'inline m-r-s'><i className = "far fa-eye"></i> {props.views}</p>
            <p className = 'inline'><i className = "far fa-thumbs-up"></i> {props.likes.length}</p>
            {props.isPinned ? <p className = 'color-primary'><i class="fas fa-map-pin"></i> Pinned</p> : null}
        </Link>
    )
}

export default PostCard;