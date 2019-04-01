import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function UserOwned(props) {
  if (props.userId === props.authorId) {
    return (
      <div className = 'flex-apart alert p-a-1 m-t-1 m-b-1'>
        <h4 className='font-normal text-center color-primary'>You wrote this post </h4>
        <Link className='btn btn-small btn-primary' to={`/edit/post/${props.postId}`}><i class="far fa-edit"></i> Edit</Link>
      </div>
    )
  }

  return null
}

UserOwned.propTypes = {
  postId: PropTypes.string,
  userId: PropTypes.string,
  authorId: PropTypes.string
}