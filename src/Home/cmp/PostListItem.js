import React        from 'react';
import moment       from 'moment';
import { Link }     from 'react-router-dom';

const PostListItem = (props) => {
    return (
        <article>
            <Link className = 'post-list-item' to = {`/show/${props._id}`}>
            <h4 className = 'font-normal'>{props.title}</h4>
            
            <div className = 'post-list-item__details font-light '>
                <div>
                    <span className = 'font-small m-r-s'><i className = "far fa-eye "></i> {props.views}</span>
                    <span className = 'font-small m-r-1'><i className = "far fa-thumbs-up"></i> {props.likeCount}</span>
                    <span className = 'font-small'>{moment(props.date).fromNow()}</span>
                </div>
                {props.isPinned ? <span className = 'color-primary m-l-2 font-small'><i className="fas fa-map-pin"></i> Pinned</span> : null}
            </div>
            </Link>
            
        </article>
    )
}

export default PostListItem;