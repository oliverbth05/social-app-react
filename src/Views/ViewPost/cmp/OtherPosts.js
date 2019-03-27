import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const OtherPosts = (props) => {
    return (
        <div>
        {props.posts.map(post => {
            if (post._id !== props.exclude_id) {
                  return (
                <Link to = {`/show/${post._id}`} className = 'other-post'>
                    <img src = {post.image}/>

                    <div className = 'other-post__content'>
                        <p>{post.title}</p>
                        <span className = 'font-small m-r-s'><i className = "far fa-eye "></i> {post.views}</span> <span className = 'font-light font-small'>{new moment(post.date).fromNow()}</span>
                    </div>

                </Link>
            )
            }
        })}
        </div>
    )
}

export default OtherPosts;
