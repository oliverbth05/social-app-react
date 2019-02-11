import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostCard = (props) => {
    console.log(props.isPinned)
    return (
        <Link to = {`/show/${props._id}`} className = 'card'>
            
            <h4 className = 'font-normal m-b-1'>{props.title}</h4>
            {props.isPinned ? <p className = 'color-primary'><i className="fas fa-map-pin"></i> Pinned</p> : null}
            <div className = 'card__details font-light '>
                <span className = 'font-light m-r-1'>{ moment(props.date).fromNow()}</span>
                <span className = 'm-r-s font-small'><i className = "far fa-eye "></i> {props.views}</span>
                <span><i className = "far fa-thumbs-up font-small"></i> {props.likes.length}</span>
            </div>
        </Link>
    )
}

export default PostCard;