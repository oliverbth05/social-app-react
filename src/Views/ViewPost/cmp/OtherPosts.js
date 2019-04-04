import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

const OtherPosts = (props) => {

    if (props.posts.length > 0) {
        return (

            <div>
                <h4 className = 'm-b-1'>Other posts from {props.author}</h4>
                {props.posts.map(post => {
                    if (post._id !== props.excludeId) {
                        return (
                            <Link to={`/show/${post._id}`} key={post._id} className='other-post'>
                                <img src={post.image} />

                                <div className='other-post__content'>
                                    <p>{post.title}</p>
                                    <span className='font-small m-r-s'><i className="far fa-eye "></i> {post.views}</span> <span className='font-light font-small'>{new moment(post.date).fromNow()}</span>
                                </div>

                            </Link>
                        )
                    }
                })}
            </div>
        )
    }

    return null


}

OtherPosts.propTypes = {
    posts: PropTypes.array,
    exludeId: PropTypes.string,
    author: PropTypes.string
}

OtherPosts.defaultProps = {
    author: 'user'
}

export default OtherPosts;
