import React from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { fetchComments, fetchMoreComments } from '../actions';

import Loader from '../../cmp/Loader';
import CommentForm from './CommentForm';

class Comments extends React.Component {

    componentDidMount() {
        this.props.fetchComments(this.props.routerparam, this.props.commentsPage)
    }

    renderComments(comments) {
        if (comments.length === 0) {
            return null
        }
        return comments.map(comment => {
            return <Comment {...comment} key={comment._id} isUserOwned={this.props.user._id === comment.user_id} />
        })
    }

    render() {
        if (this.props.loading || this.props.comments === undefined) {
            return <Loader halfscreen />
        }

        return (
            <div className='m-b-3 m-t-1' id = 'comments'>
                <h4 className = 'font-normal m-b-1 m-t-2'>Comments <span className = 'font-light color-primary'>{this.props.comments.length} of {this.props.count}</span></h4>
                <CommentForm routerparam={this.props.routerparam} />
                {this.renderComments(this.props.comments)}
                {!this.props.noMoreComments ? <button className='button-block' onClick = { () => {this.props.fetchMoreComments(this.props.routerparam, this.props.commentsPage)}} >Show More</button> : <p className = 'text-center font-light color-primary p-t-2'>No More Comments</p>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments.comments,
        count: state.comments.count,
        noMoreComments: state.comments.noMoreComments,
        commentsPage: state.comments.commentsPage,
        post: state.post,
        loading: state.loading.comments_loading,
        user: state.user.userData
    }
}

export default connect(mapStateToProps, { fetchComments, fetchMoreComments })(Comments);