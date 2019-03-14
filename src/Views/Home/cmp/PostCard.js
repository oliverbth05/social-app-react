import React            from 'react'
import { Link }         from 'react-router-dom';
import moment           from 'moment';


/* Component Summary 

    A presentational component that displays a single post from the feed in a grid-like waterfall format

*/

const PostCard = (props) => {
    return (
        <Link to = {`/show/${props._id}`} className = 'card'>
            
            <h4 className = 'font-normal p-a-1'>{props.title}</h4>
            
            {props.image ? <img src = {props.image}/> : null }
            
            <div className = 'card__details font-light '>
                <div>
                    <span className = 'font-small m-r-s'><i className = "far fa-eye "></i> {props.views}</span>
                    <span className = 'font-small m-r-1'><i className = "far fa-thumbs-up"></i> {props.likeCount}</span>
                    <span className = 'font-small'>{moment(props.date).fromNow()}</span>
                </div>
                {props.isPinned ? <span className = 'color-primary'><i className="fas fa-map-pin"></i> Pinned</span> : null}
            </div>
        </Link> 
    ) 
}

export default PostCard;
//<span className = 'font-light m-r-1'>{ moment(props.date).fromNow()}</span> 