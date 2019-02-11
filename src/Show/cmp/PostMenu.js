import React from 'react';

import LikeButton from './LikeButton';
import PinButton from './PinButton';

const PostMenu = (props) => {

    return (
        <div className='post-menu m-b-1'>

            <LikeButton
                loading={props.like_loading}
                likePost={props.likePost}
                disabled={!props.canLike}
                post_id={props.post_id}
                user_id={props.user_id}
            ></LikeButton>

            <PinButton
             loading={props.pin_loading}
             pinPost={props.pinPost}
             disabled={!props.canPin}
             post_id={props.post_id}
             post_title={props.post_title}
             user_id={props.user_id}    
            ></PinButton>



 
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