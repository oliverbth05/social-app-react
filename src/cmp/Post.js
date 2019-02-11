import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

export default function Post(props) {
  return (
    <div className='box m-b-1'>
      <img className='avatar' src={`https://api.adorable.io/avatars/130/${props.user_name}.png`} />
      <Link to={`/user/${props.user_id}`} className='text-center font-normal m-b-2'> {props.user_name}</Link>
      <h3 className='m-b-1 text-center'>{props.title}</h3>
      <p className='m-b-1'>{props.body}</p>
      <p>{moment(props.date).fromNow()}</p>
      <span><i className="far fa-eye"></i> {props.views}  </span>
      <span><i className="far fa-thumbs-up"></i> {props.likes.length} </span>
    </div>
  )
}
