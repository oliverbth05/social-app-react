import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
  console.log(props)
  return (

  <div className='m-t-3'>
    <div className='m-t-3 m-b-1'>
      <div>

        <h3 className='font-light color-primary text-center p-a-1'>{`${props.category[0].toUpperCase()}${props.category.slice(1)}`}</h3>

        <h2 className='post-heading'>{props.title}</h2>
        <h4 className='post-caption'>{props.caption}</h4>
        {props.image ? <img src={props.image} className='post-image' /> : null}
        <p className='post-body'>{props.body}</p>
      </div>
    </div>
  </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string
}

Post.defaultProps = {
  category: 'miscellaneous'
}

export default Post;