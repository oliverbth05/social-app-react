import React        from 'react';
import moment       from 'moment';
import { Link }     from 'react-router-dom';
import PropTypes    from 'prop-types';
/* Component Summary

    A presentational component that displays a single post from the feed in a vertical stacking format  

*/ 

const PostListItem = (props) => {
    return (
        <article>
            <Link className = 'post-list-item' to = {`/show/${props._id}`}>
                <div className = 'post-list-item__content'>
                    <h4 className = 'font-normal'>{props.title.length > 100 ? `${props.title.slice(0, 100)}...` : props.title}</h4>

                    <div className = 'post-list-item__details font-light '>
                        <div>
                            <span className = 'font-small m-r-1'>{props.userName}</span>
                            <span className = 'font-small m-r-1'>{`${props.category[0].toUpperCase()}${props.category.slice(1)}`}</span>
                            <span className = 'font-small m-r-1'>{moment(props.date).fromNow()}</span>
                            {props.isPinned ? <span className = 'color-primary m-l-2 font-small'><i className="fas fa-map-pin"></i> Pinned</span> : null}
                        </div>
                        
                    </div>
                </div>
                {props.image ? <img className = 'post-list-item__img' src = {props.image} /> : null }
                <div className = 'post-list-item__stats'>
                    <div>
                        <span className = 'font-small'><i className = "far fa-eye "></i> {props.views}</span>
                    </div> 
                    <div>
                        <span className = 'font-small'><i className = "far fa-thumbs-up"></i> {props.likeCount}</span>
                    </div>
                </div>
                
            </Link>
            
           
             
        </article> 
    )
}

PostListItem.propTypes = {
    _id: PropTypes.string,
    title: PropTypes.string,
    userName: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
    views: PropTypes.number,
    likeCount: PropTypes.number
}

PostListItem.defaultProps = {
    category: 'miscellaneous'
}

export default PostListItem;