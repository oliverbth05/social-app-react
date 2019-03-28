import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeComment } from '../actions';
import ActionButton from './ActionButton';
import PropTypes from 'prop-types';

class Comment extends React.Component {

    render() {
        var canLike = !this.props.likes.includes(this.props.user._id);
        var isUserOwned = this.props.user._id === this.props.author._id;

        return (
            <div>
                <div className = 'comment'>
                <img alt='user avatar' className='comment__avatar' src={'https://api.adorable.io/avatars/130/' + this.props.author.userName + '.png'} />
                    <div className = 'comment__main'>
                        <div className = 'comment__details'>
                            <Link className='comment__user' to={'/profile/' + this.props.author._id}>{isUserOwned ? 'You' : this.props.author.userName}</Link>
                            <span className='comment__date'>{moment(this.props.date).fromNow()}</span>
                        </div>
                        <p className = 'comment__body'>{this.props.body}</p>
                        <div className = 'comment__options'>
                            <div>
                                {isUserOwned ? <Link className='btn btn-small btn-primary inline m-r-s' to={`/edit/comment/${this.props.post._id}/${this.props._id}`}><i class="far fa-edit"></i> Edit</Link>: null}

                                <ActionButton
                                disabledMessage = {'Liked'}
                                array = {this.props.likes}
                                item = {this.props.user._id}
                                onClick = {() => {
                                    this.props.likeComment({
                                        comment_id: this.props._id,
                                        user_id: this.props.user._id,
                                        post_id: this.props.post_id,
                                        user_name: this.props.user_name,
                                        author_id: this.props.author_id
                                    })
                                }}>
                                <i className="far fa-thumbs-up"></i> Like
                                </ActionButton>
                            </div>
                            <span className = 'color-primary'>{this.props.likes.length} Likes</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Comment.propTypes = {
    user: PropTypes.object,
    likes: PropTypes.array,

    
}

const mapStateToProps = state => ({ user: state.auth.userData })

export default connect(mapStateToProps, { likeComment })(Comment);
