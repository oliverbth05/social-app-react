import React from 'react';

import LikeButton from './LikeButton';
import PinButton from './PinButton';

const PostMenu = (props) => {

    return (
        <div className='post-menu'>
            
            <div>
                <span className = 'm-r-1 font-light'><i className="far fa-thumbs-up"></i> Likes: {props.likes}</span>
                <span className = 'font-light'><i className="far fa-eye"></i>  Views: {props.views}</span>
            </div>



            <div>
                <LikeButton
                    token = {props.token}
                    loading={props.like_loading}
                    likePost={props.likePost}
                    disabled={!props.canLike}
                    post_id={props.post_id}
                    user_id={props.user_id}
                    author_id={props.author_id}
                    user_name={props.user_name}
                ></LikeButton>

                <PinButton
                token = {props.token}
                loading={props.pin_loading}
                pinPost={props.pinPost}
                disabled={!props.canPin}
                post_id={props.post_id}
                post_title={props.post_title}
                user_id={props.user_id}    
                ></PinButton>
            </div>
 
           



 
        </div>
    )
}
/*

    Required Props:
    
        like_loading,
        pin_loading,
        
        canLike,
        canPin,
        
        postLike
        postPin

*/

export default PostMenu;