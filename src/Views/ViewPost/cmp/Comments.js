import React from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { fetchComments, fetchMoreComments, resetCommentError, likeComment } from '../actions';

import Loader from '../../../components/ui/Loader';
import SubmitButton from '../../../components/ui/SubmitButton';

import CommentForm from './CommentForm';
import Error from '../../../components/ui/Error';

class Comments extends React.Component {

    componentDidMount() {
        this.props.fetchComments(this.props.routerparam, this.props.commentsPage)
    }

    componentWillUnmount() {
        if (this.props.comment_error) { 
            this.props.resetCommentError()
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.routerparam !== prevProps.routerparam) {
            this.props.fetchComments(this.props.routerparam, this.props.commentsPage)
        }
    }

    renderComments(comments) {
        if (comments.length === 0) {
            return null
        }
        return comments.map(comment => {
            return (
                <Comment
                {...comment}
                key={comment._id}
                user = {{
                    _id: this.props.user._id,
                    userName: `${this.props.user.firstName} ${this.props.user.lastName}`
                }}
                likeComment = {this.props.likeComment} />
            )
        })
    }

    render() {
        if (this.props.post_error) {
            return null
        }

        if (this.props.comment_error) {
            return <Error message={'Error communicating with server'} />
        }

        else if (this.props.loading || this.props.comments === null) {
            return <Loader halfscreen />
        }

        return (
            <div id='comments'>
                <h4>Comments <span className='font-light color-primary'>{this.props.comments.length} of {this.props.count}</span></h4>
                <CommentForm routerparam={this.props.routerparam} />
                {this.renderComments(this.props.comments)}

                {!this.props.noMoreComments ?
                    <SubmitButton
                    loading={this.props.moreLoading}
                    onClick={() => { this.props.fetchMoreComments(this.props.routerparam, this.props.commentsPage) }}
                    >Show More
                    </SubmitButton>
                    :
                    <h4 className='text-center color-primary font-light p-a-2'>No More Comments</h4>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comments: state.comments.comments,
    count: state.comments.count,
    noMoreComments: state.comments.noMoreComments,
    commentsPage: state.comments.commentsPage,
    post: state.post,
    loading: state.comments.loading,
    moreLoading: state.comments.moreLoading,
    user: state.auth.userData,
    comment_error: state.comments.error,
    post_error: state.post.post_error
})

export default connect(mapStateToProps, { fetchComments, fetchMoreComments, resetCommentError, likeComment })(Comments);
