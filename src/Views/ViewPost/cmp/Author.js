import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Author = (props) => {
    return (
        <div className = 'author'>
            <img alt='user-avatar' src={`https://api.adorable.io/avatars/130/${props.authorName}.png`} />
            <div>
                <p>Written by <Link className = 'inline' to = {`/profile/${props.authorId}`}>{props.authorName}</Link></p>
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