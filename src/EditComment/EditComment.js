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


class EditComment extends React.Component {
    
    componentDidMount() {
        this.props.fetchComment(this.props.match.params.id);
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
    
    state = {
        body: '',
        firstLoaded: false,
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
                        <button className = 'button-block'>Submit</button>
                    </form>
                    <button onClick = {() => {this.props.deleteComment({...this.props.comment, token: this.props.token}, this.props)}} className = 'button m-t-2'>Delete</button>
                </div>
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