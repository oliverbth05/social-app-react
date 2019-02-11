import React from 'react'

export default function PinButton(props) {

  if (props.loading) {
    return <button className='button m-r-1'><div className='loader-button'></div></button>
  }
  else if (props.disabled && !props.loading) {
    return <span className='color-primary m-r-1'><i className="fas fa-check-circle"></i> Pinned</span>
  }
  else {
    return <button onClick={() => { props.pinPost(props.post_id, props.user_id, props.post_title) }} className='button m-r-1'><i className="fas fa-map-pin"></i> Pin</button>
  }
}