import React from 'react';

const Comment = (props) => {
        return (
            <div className = 'comment'>
                <div className = 'comment__top'>
                    <img alt = 'user avatar' className = 'comment__avatar' src = {'https://api.adorable.io/avatars/130/' + props.user_name + '.png'} />
                    <p className = 'comment__body'>{props.body}</p>
                </div>
                
                <div className = 'comment__info'>
                    <a href = {'/user/' + props.user_id}>{props.user_name}</a>
                    <p>{props.date}</p>
                </div>
            </div>
        )
}

export default Comment;