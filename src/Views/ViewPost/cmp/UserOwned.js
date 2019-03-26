import React from 'react'
import { Link } from 'react-router-dom';

export default function UserOwned(props) {
  return (
    <div className = 'flex-apart alert p-a-1 m-t-1 m-b-1'>
      <h4 className='font-normal text-center color-primary'>You wrote this post </h4>
      <Link className='btn btn-small btn-primary' to={`/edit/post/${props.post_id}`}><i class="far fa-edit"></i> Edit</Link>
    </div>
  )
}
