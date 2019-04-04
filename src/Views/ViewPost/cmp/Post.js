import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';

const Post = (props) => 

  <div> 
    <h4 className='post-category'>{`${props.category[0].toUpperCase()}${props.category.slice(1)}`}</h4>
    <h2 className='post-heading'>{props.title}</h2>
    <h4 className='post-caption'>{props.caption}</h4>
    {props.image ? <img src={props.image} className='post-image' /> : null}
    <p className='post-body'>{props.body}</p>
  </div>
 


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