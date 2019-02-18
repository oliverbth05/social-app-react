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
            return <p>No Comments</p>
        }
        return comments.map(comment => {
            console.log(this.props.user._id === comment.user_id)
            return <Comment {...comment} key={comment._id} isUserOwned={this.props.user._id === comment.user_id} />
        })
    }

    render() {
        if (this.props.loading || this.props.comments === undefined) {
            return <Loader halfscreen />
        }

        return (
            <div className='m-b-3 m-t-1'>
                <CommentForm routerparam={this.props.routerparam} />
                {this.renderComments(this.props.comments)}
                {this.props.comments.length > 0 ? <button className='button-block' onClick = { () => {this.props.fetchMoreComments(this.props.routerparam, this.props.commentsPage)}} >Show More</button> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments.comments,
        commentsPage: state.comments.commentsPage,
        post: state.post,
        loading: state.loading.comments_loading,
        user: state.user.userData
    }
}

export default connect(mapStateToProps, { fetchComments, fetchMoreComments })(Comments);