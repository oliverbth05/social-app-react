import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Author = (props) => {
    if (props.userId === props.authorId) {
        return (
            <div className='flex-apart alert p-a-1 m-t-1 m-b-1'>
                <h4 className='font-normal text-center color-primary'>You wrote this post </h4>
                <Link className='btn btn-small btn-primary' to={`/edit/post/${props.postId}`}><i class="far fa-edit"></i> Edit</Link>
            </div>
        )
    }
    return (
        <div className='author'>
            <img alt='user-avatar' src={`https://api.adorable.io/avatars/130/${props.authorName}.png`} />
            <div>
                <p>Written by <Link className='inline' to={`/profile/${props.authorId}`}>{props.authorName}</Link></p>
                <span>{new moment(props.date).fromNow()}</span>
            </div>

        </div>
    )
}

Author.propTypes = {
    authorName: PropTypes.string,
    authorId: PropTypes.string,
    date: PropTypes.string
}

export default Author;