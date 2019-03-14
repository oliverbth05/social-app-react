import React from 'react'

export default function Tag(props) {
  return (
    <div className='tag'>
      <p>{props.children}</p>
      <i onClick={() => { props.onClick(props.index) }} class="fas fa-times"></i>
    </div>
  )
}
