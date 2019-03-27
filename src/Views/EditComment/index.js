import React from 'react';
import IsAuthenticated from '../../components/hoc/IsAuthenticated';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchComment, resetComment, updateComment, deleteComment, resetCommentError } from './actions';
import Loader from '../../components/ui/Loader';
import ActionModal from '../../components/ui/ActionModal';
import Error from '../../components/ui/Error';

class EditComment extends React.Component {

    componentDidMount() {
        this.props.fetchComment({ post_id: this.props.match.params.post_id, comment_id: this.props.match.params.comment_id });
        document.title = 'Edit Comment'
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
        if (this.props.error) {
            this.props.resetCommentError();
        }
    }

    inputHandler(e) {
        this.setState({
            body: e.target.value
        })
    }

    submitHandler(e) {
        e.preventDefault();
        if (this.state.body) {
            this.props.updateComment({ ...this.props.comment, body: this.state.body, token: this.props.token }, this.props)
        }
    }

    deleteComment() {
        this.props.deleteComment({ ...this.props.comment, token: this.props.token }, this.props)
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

        if (this.props.error) {
            return (
                <div className = 'container-flex-center'>
                    <Error message = {'The comment is no longer available'} />
                </div>
            )
        }

        if (this.props.loading || this.props.comment === null) {
            return <Loader fullscreen />
        }

        return (
            <div className = 'container-flex-center'>
                <div className = 'container-700'>
                    <form onSubmit = {this.submitHandler.bind(this)} className = 'm-t-2 box'>
                        <h3 className = 'font-normal'>Edit Comment</h3>
                        <span className = 'color-primary'>Posted on {moment(this.props.comment.date).format('MM/DD/YYYY')}</span>
                        <textarea onChange = {this.inputHandler.bind(this)} value = {this.state.body} className = 'textarea-small m-b-s m-t-1'></textarea>
                        <button className = 'btn-block btn btn-primary'><i class="fas fa-save"></i> Save Changes</button>
                    </form>
                    <button onClick = {this.toggleModal.bind(this)} className = 'btn btn-secondary m-t-2 m-r-s'><i class="fas fa-trash"></i> Delete</button>
                    <button onClick = {() => {this.props.history.go(-1)}} className = 'btn btn-primary m-t-2'>Cancel Changes</button>
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

const mapStateToProps = state => ({
    loading: state.editComment.loading,
    comment: state.editComment.comment,
    error: state.editComment.error,
})

export default connect(mapStateToProps, { fetchComment, resetComment, resetCommentError, updateComment, deleteComment })(IsAuthenticated(EditComment));
