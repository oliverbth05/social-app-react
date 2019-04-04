import React from 'react'
import { Link } from 'react-router-dom';

export default function Tags(props) {



  return (
    <div className = 'm-t-3 m-b-3'>
      <h4>Tags</h4>
      <div className='post-tag-container'>
        {props.tags.map(tag =>
          <Link className='post-tag' to='/'>{tag}</Link>
        )}

        { props.tags.length < 1 ? 
          <p>This post has no tags</p>
        : null }
      </div>
    </div>

  )
}
