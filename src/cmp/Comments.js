import React from 'react';
import Comment from './Comment';

const Comments = (props) => {
    return (
        <div className = 'box-m-t-1' >
            {props.comments.map(comment => {
                return <Comment {...comment} />
            })
            }
        </div>
    )
}

export default Comments;