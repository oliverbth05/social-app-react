import React from 'react';
import { connect } from 'react-redux';
import { postComment } from '../actions';
import { reduxForm, Field } from 'redux-form';

class CommentForm extends React.Component {
    
    renderInput({input, meta, label, type}) {
        console.log(meta)
        return (
            <div  className = 'm-b-s'>
                {meta.submitFailed  ?
                <span className='font-light font-small color-secondary'>{meta.error}</span>
                : null}
                <textarea className = 'textarea-small' {...input} type = {type} placeholder = 'Leave a comment'/> 
            </div>
            
        )
    }
    
    submitHandler(formValues) {
        
        if (!formValues.comment) {
            return false
        }
        
        var data = {
            body: formValues.comment,
            user_id: this.props.user._id,
            user_name: `${this.props.user.first_name} ${this.props.user.last_name}`,
            post_id: this.props.routerparam,
        }
        this.props.postComment(data);
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit = {this.props.handleSubmit(this.submitHandler.bind(this))} className = 'm-b-2'>
                    <Field component = {this.renderInput} name = 'comment' type = 'text' label = 'Comment' />
                    <button  disabled = {this.props.loading ? true : false} className = 'btn btn-block btn-primary'>Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.userData,
        loading: state.loading.comments_loading
    }
}

const validate = (formValues) => {
    const errors = {
        
    }
    
    if (!formValues.comment) {
        errors.comment = 'Cannot submit empty comment.'
    }
    
    return errors
}

const Connected = connect(mapStateToProps, {postComment})(CommentForm);

export default reduxForm({
    form: 'comment',
    validate
})(Connected)