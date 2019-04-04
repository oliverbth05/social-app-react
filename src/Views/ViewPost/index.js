import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, notPostError } from './actions';

import IsAuthenticated from '../../components/hoc/IsAuthenticated';
import Comments from './cmp/Comments';
import Nav from './cmp/ShowNav';
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
        if (this.props.error) return <PostError error={this.props.error} />

        return (
            <React.Fragment>
                <Nav history={this.props.history} />
                {this.props.loading || this.props.post === null ? <Loader fullscreen /> :
                    <div className='post-container'>
                        <section className='m-t-1 m-b-1'>
                            <Author date={this.props.post.date} authorName={this.props.post.author.userName} authorId={this.props.post.author._id} postId={this.props.post._id} userId={this.props.user._id} />
                        </section>
                        <section className='m-t-2 m-b-3'>
                            <div className='m-b-2'>
                                <Post {...this.props.post} />
                            </div>
                            <PostMenu />
                        </section>
                        <section className='m-t-3 m-b-3'>
                            <Tags tags={this.props.post.tags} />
                        </section>
                        <section className='m-t-3 m-b-3'>
                            <h4>Other posts from {this.props.post.author.userName}</h4>
                            <OtherPosts posts={this.props.post.otherPosts} excludeId={this.props.post._id} author={this.props.post.author.userName} />
                        </section>
                        <section className='m-t-3 m-b-3'>
                            <Comments routerparam={this.props.match.params.id} />
                        </section>
                    </div >
                }
            </React.Fragment>
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