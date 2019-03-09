import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const OtherPosts = (props) => {
    return (
        <div className = 'm-t-1 m-b-1'>
            <h4 className = 'font-light'>More from {props.user_name}</h4>
        {props.posts.map(post => {
            if (post._id !== props.exclude_id) {
                  return (
                <Link to = {`/show/${post._id}`} className = 'other-post'>
                    <img src = {post.image}/>
                    
                    <div>
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