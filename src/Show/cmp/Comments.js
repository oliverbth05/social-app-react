import React from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';

import Loader from '../../cmp/Loader';

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
            return (
                <div className = 'box'>
                    <Loader />
                </div>
                
            )
        }
        
        return (
            <div className = 'box'>
                <h3 className = 'font-normal'>Comments</h3>
                {this.renderComments(this.props.comments)}
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