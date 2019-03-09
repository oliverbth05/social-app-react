 import React from 'react'

export default function SubButton(props) {

  if (props.loading) {
    return <button className='btn btn-primary btn-round btn-block'><div className='loader-button'></div></button>
  }
  else if (props.disabled && !props.loading) {
    return <button onClick = {() => {props.removeSub()}} className='btn btn-primary btn-round btn-block'><i className="fas fa-check-circle"></i> Subscribed</button>
  }
  else {
    return <button onClick={() => {props.addSub()}} className='btn btn-block btn-round btn-primary'>Subscribe</button>
  } 
}
