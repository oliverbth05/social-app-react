import React from 'react'

export default function LikeButton(props) {
  if (props.loading) {
    return <button className='btn btn-primary m-r-1'><div className='loader-button'></div></button>
  }
  else if (props.disabled && !props.loading) {
    return <span className='color-primary m-r-1'><i className="fas fa-check-circle"></i> Liked</span>
  }
  else {
    return <button onClick={() => { props.likePost({post_id : props.post_id, user_id: props.user_id}) }} className='btn btn-primary m-r-1'><i className="far fa-thumbs-up"></i> Like</button>
  }
}
 