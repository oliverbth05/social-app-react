import React from 'react'

export default function PinButton(props) {

  if (props.loading) {
    return <button className='btn btn-primary'><div className='loader-button'></div></button>
  }
  else if (props.disabled && !props.loading) {
    return <span className='color-primary'><i className="fas fa-check-circle"></i> Pinned</span>
  }
  else {
    return <button onClick={() => { props.pinPost({post_id: props.post_id, user_id: props.user_id, post_title: props.post_title}) }} className='btn btn-primary'><i className="fas fa-map-pin"></i> Pin</button>
  }
}