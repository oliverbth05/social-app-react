import React from 'react'; 
import moment from 'moment';
import { Link } from 'react-router-dom';
import ActionButton from '../../../components/ui/ActionButton';
import PropTypes from 'prop-types';

const Comment = (props) => {
    var isUserOwned = props.user._id === props.author._id;
    return (
        <div>
            <div className='comment'>
                <img alt='user avatar' className='comment__avatar' src={'https://api.adorable.io/avatars/130/' + props.author.userName + '.png'} />
                <div className='comment__main'>
                    <div className='comment__details'>
                        <Link className='comment__user' to={'/profile/' + props.author._id}>{isUserOwned ? 'You' : props.author.userName}</Link>
                        <span className='comment__date'>{moment(props.date).fromNow()}</span>
                    </div>
                    <p className='comment__body'>{props.body}</p>
                    <div className='comment__options'>
                        <div>
                            {isUserOwned ? <Link className='btn btn-small btn-primary inline m-r-s' to={`/edit/comment/${props.post._id}/${props._id}`}><i class="far fa-edit"></i> Edit</Link> : null}
                            <ActionButton
                                disabledMessage={'Liked'}
                                array={props.likes}
                                item={props.user._id}
                                onClick={() => {
                                    props.likeComment({
                                        commentId: props._id,
                                        author: props.author,
                                        user: props.user,
                                        post: props.post
                                    });
                                }}>
                                <i className="far fa-thumbs-up"></i> Like</ActionButton>
                        </div>
                        <span className='color-primary'>{props.likes.length} Likes</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Comment.propTypes = {
    author: PropTypes.shape({
        _id: PropTypes.string,
        userName: PropTypes.string
    }),
    user: PropTypes.shape({
        _id: PropTypes.string,
        userName: PropTypes.string
    }),
    post: PropTypes.shape({
        _id: PropTypes.string
    }),
    likes: PropTypes.array,
    body: PropTypes.string,
    date: PropTypes.string,
    likeComment: PropTypes.func,
    _id: PropTypes.string
}

export default Comment
