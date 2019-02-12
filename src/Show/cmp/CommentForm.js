import React from 'react';
import { connect } from 'react-redux';
import { postComment } from '../actions';

class CommentForm extends React.Component {
    
    state = {
        commentField: '',
        error: false
    }
    
    inputHandler(e) {
        this.setState({
            commentField: e.target.value
        })
    }
    
    submitHandler(e) {
        e.preventDefault();
        if (!this.state.commentField) {
            return this.setState({
                error: true
            })
        }
        if (this.state.error) {
            this.setState({
                error:false
            })
        }
        var data = {
            body: this.state.commentField,
            user_id: this.props.user._id,
            user_name: `${this.props.user.first_name} ${this.props.user.last_name}`,
            post_id: this.props.routerparam,
            token: this.props.token
        }
        this.props.postComment(data);
        this.setState({
            commentField: ''
        })
    }
    
    render() {
        return (
            <div className = 'box'>
                <form onSubmit = {this.submitHandler.bind(this)}>
                    {this.state.error ? <p className = 'color-primary font-light m-b-1'>Cannot submit empty comment.</p> : null }
                    <input disabled = {this.props.loading ? true : false} onChange = {this.inputHandler.bind(this)} value = {this.state.commentField} className = 'input-small m-r-s'/>
                    <button  disabled = {this.props.loading ? true : false} className = 'button'>Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.userData,
        token: state.user.token,
        loading: state.loading.comments_loading
    }
}

export default connect(mapStateToProps, {postComment})(CommentForm);