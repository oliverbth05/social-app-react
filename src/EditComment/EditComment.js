import React                    from 'react';
import isAuthenticated          from '../hoc/isAuthenticated';
import moment                   from 'moment';
import { connect }              from 'react-redux';
import { 
    fetchComment,
    resetComment,
    updateComment,
    deleteComment }             from './actions';
    
import Loader                   from '../cmp/Loader';
import ActionModal              from '../cmp/ActionModal';

class EditComment extends React.Component {
    
    componentDidMount() {
        this.props.fetchComment({post_id: this.props.match.params.post_id, comment_id: this.props.match.params.comment_id});
    }
    
    componentDidUpdate() {
        if (this.props.comment !== null && this.state.body === '' && this.state.firstLoaded === false) {
            this.setState({
                body: this.props.comment.body,
                firstLoaded: true
            })
        }
    }
    
    componentWillUnmount() {
        this.props.resetComment();
    }
    
    inputHandler(e) {
        this.setState({
            body: e.target.value
        })
    }
    
    submitHandler(e) {
        e.preventDefault();
        if (this.state.body) {
            this.props.updateComment({...this.props.comment, body: this.state.body, token: this.props.token}, this.props)
        }
    }
    
    deleteComment() {
        this.props.deleteComment({...this.props.comment, token: this.props.token}, this.props)
    }
    
    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    
    state = {
        body: '',
        firstLoaded: false,
        showModal: false
    }
    
    render() {
        
        if (this.props.loading || this.props.comment === null) {
            return <Loader fullscreen />   
        }
 
        return (
            <div className = 'container-flex-center'>
                <div className = 'container-700'>
                    <h3 className = 'font-normal'>Edit Comment</h3>
                    <span className = 'color-primary'>Posted on {moment(this.props.comment.date).format('MM/DD/YYYY')}</span>
                    <form onSubmit = {this.submitHandler.bind(this)} className = 'm-t-2'>
                        <label className = 'post-form__label'>Comment Body</label>
                        <textarea onChange = {this.inputHandler.bind(this)} value = {this.state.body} className = 'textarea-small m-b-s'></textarea>
                        <button className = 'btn-block btn btn-primary'><i class="fas fa-save"></i> Save Changes</button>
                    </form>
                    <button onClick = {this.toggleModal.bind(this)} className = 'btn btn-secondary m-t-2'><i class="fas fa-trash"></i> Delete</button>
                </div>
                
                {this.state.showModal ?
                <ActionModal
                title = 'Delete Comment'
                content = 'Are you sure you want to delete this comment?'
                actionType = 'Delete'
                action = {() => {this.deleteComment()}}
                toggle = {this.toggleModal.bind(this)}
                />
                : null }
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading.edit_comment_loading,
        comment: state.edit_comment.comment,
        token: state.user.token
    }
}

export default connect(mapStateToProps, {fetchComment, resetComment, updateComment, deleteComment})(isAuthenticated(EditComment));