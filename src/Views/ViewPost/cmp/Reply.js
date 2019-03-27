import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

class Reply extends React.Component {
    render() {

        let isUserOwned = this.props.user_id === this.props.user._id

        return (
            <div className = 'comment m-l-3'>
                <img alt='user avatar' className='comment__avatar' src={'https://api.adorable.io/avatars/130/' + this.props.user_name + '.png'} />
                    <div className = 'comment__main'>
                        <div className = 'comment__details'>
                            <Link className='comment__user' to={'/profile/' + this.props.user_id}>{isUserOwned ? 'You' : this.props.user_name}</Link>
                            <span className='comment__date'>{moment(this.props.date).fromNow()}</span>
                        </div>
                        <p className = 'comment__body'>{this.props.body}</p>
                        <div className = 'comment__options'>
                            <div>
                                {isUserOwned ? <Link className='btn btn-small btn-round btn-comment btn-primary inline m-r-s' to={`/edit/reply/${this.props.post_id}/${this.props._id}`}><i class="far fa-edit"></i> Edit</Link>: null}

                                <button onClick = { this.showReplies } className = 'btn btn-small btn-primary btn-round btn-comment inline m-r-s'><i class="fas fa-comment-dots"></i> Reply</button>
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
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.userData })

export default connect(mapStateToProps, {})(Reply)
