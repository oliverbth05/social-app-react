import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, notPostError } from './actions';

import IsAuthenticated from '../../components/hoc/IsAuthenticated';
import Comments from './cmp/Comments';
import ShowNav from './cmp/ShowNav';
import Post from './cmp/Post';
import PostMenu from './cmp/PostMenu';
import Author from './cmp/Author';
import UserOwned from './cmp/UserOwned';
import Loader from '../../components/ui/Loader';
import PostError from './cmp/PostError';
import OtherPosts from './cmp/OtherPosts';
import Tags from './cmp/Tags';

class ViewPost extends React.Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchPost(this.props.match.params.id)
            window.scrollTo(0, 0)
        }
        if (this.props.post) {
            document.title = this.props.post.title
        }
    }

    componentWillUnmount() {
        if (this.props.error) {
            this.props.notPostError()
        }
    }

    render() {
        if (this.props.error) {
            return <PostError error={this.props.error} />
        }

        else if (this.props.loading || this.props.post === null) {
            return <Loader />
        }

        let isUserOwned = this.props.user._id === this.props.post.author._id;

        return (
            <div className='container-1000 m-t-3'>
                <ShowNav history={this.props.history} />
                <Author date={this.props.post.date} authorName={this.props.post.author.userName} authorId={this.props.post.author._id} postId={this.props.post._id} userId={this.props.user._id} />
                <Post {...this.props.post} />
                <PostMenu />
                <Tags tags={this.props.post.tags} />
                <OtherPosts posts={this.props.post.otherPosts} excludeId={this.props.post._id} author={this.props.post.author.userName} />
                <Comments routerparam={this.props.match.params.id} />
            </div >
        )
    }
}

const mapStateToProps = state => ({
    post: state.post.data,
    user: state.auth.userData,
    loading: state.post.postLoading,
    error: state.post.error
})


export default connect(mapStateToProps, { fetchPost, notPostError })(IsAuthenticated(ViewPost))