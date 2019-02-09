import React from 'react';
import ActionButton from './ActionButton';

const PostMenu = (props) => {
    return (
        <div className = 'post-menu m-b-1'>
            <ActionButton
                disabledText = {'Liked'} 
                onClick = {props.postLike} 
                disabled = {!props.canLike} 
                loading = {props.like_loading}>
            <i class="far fa-thumbs-up"></i> Like</ActionButton>
            
            <ActionButton 
                disabledText = {'Pinned'}
                onClick = {props.postPin}
                disabled = {!props.canPin}
                loading = {props.pin_loading}>
            <i class="fas fa-map-pin"></i> Pin </ActionButton>
        </div>
    )
}

//Required Props

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