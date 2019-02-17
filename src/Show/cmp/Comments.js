import React from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';

import Loader from '../../cmp/Loader';
import CommentForm from './CommentForm';

class Comments extends React.Component {
    
    componentDidMount() {
        this.props.fetchComments(this.props.routerparam)
    }
    
    renderComments(comments) {
        
        if (comments.length === 0) {
            return <p>No Comments</p>
        }
        
        return comments.map(comment => {
            return <Comment {...comment} key = {comment._id}/>
        })
    }
    
    render() {
        if (this.props.loading || this.props.comments === null || this.props.comments === undefined) {
            return <Loader halfscreen/>
        }
        
        return (
            <div className = 'm-b-3'>
                
                <h3 className = 'font-normal m-b-1 m-t-3 border-bottom p-b-1'>Comments <span className = 'font-light color-primary'>{this.props.comments.length} showing</span></h3>
                <CommentForm routerparam = {this.props.routerparam} />
                {this.renderComments(this.props.comments)}
                {this.props.comments.length > 0 ? <button className = 'button-block'>Show More</button> : null }
            </div>
        )
    }
  
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        post: state.post,
        loading: state.loading.comments_loading
    }
    
}

export default connect(mapStateToProps, {fetchComments})(Comments);