import React from 'react';
import { connect } from 'react-redux';
import { isMember } from 'util';
import { fetchPosts, fetchMorePosts, homeUpdated } from '../actions';
import PostCard from './PostCard';
import PostListItem from './PostListItem';
import Loader from '../../../components/ui/Loader';
import LoaderButton from '../../../components/ui/LoaderButton';
/* Component Summary

    Responsible for fetching and displaying posts from the server,
    based on parameters managed outside the component by the HomeNav

*/
class Feed extends React.Component {

    componentDidMount() {
        if (!this.props.posts || this.props.fetchOnLoad) {
            this.props.fetchPosts(this.props.sort, this.props.searchTerm)
            this.props.homeUpdated();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.sort !== this.props.sort) {
            this.props.fetchPosts(this.props.sort, this.props.page)
        }
    }

    renderPosts(posts, layout) {

        if (layout === 'grid') {
            return (
                <div className='home-grid'>
                    {posts.map(post => {
                        var pinned = this.props.user.pins.map(pin => {
                            return pin.post_id
                        })
                        var isPinned = pinned.indexOf(post._id) !== -1
                        return (
                            <PostCard key={post._id} {...post} user_id={this.props.user._id} isPinned={isPinned} />
                        )
                    })}
                </div>
            )
        }

        else {
            return (
                <div className='post-list'>
                    {posts.map(post => {
                        var pinned = this.props.user.pins.map(pin => {
                            return pin.post_id
                        })
                        var isPinned = pinned.indexOf(post._id) !== -1
                        return (
                            <PostListItem key={post._id} {...post} user_id={this.props.user._id} isPinned={isPinned} />
                        )
                    })}
                </div>
            )
        }
    }

    render() {

        if (this.props.error) {
            return <h3 className='alert-error font-normal text-center '><i class="fas fa-exclamation-circle"></i> Error Fetching Posts</h3>
        }

        if (this.props.loading || this.props.posts === null) {
            return (
                <Loader fullscreen />
            )
        }

        return (
            <div>
                {this.renderPosts(this.props.posts, this.props.layout)}

                {!this.props.reachedEnd ?
                    <div className='m-t-2'>
                        <LoaderButton loading={this.props.more_loading} onClick={() => { this.props.fetchMorePosts(this.props.sort, this.props.page) }}>Show More</LoaderButton>
                    </div>
                    :
                    <h3 className='text-center color-primary font-light p-a-2'>End of list.</h3>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.home.posts,
        layout: state.home.layout,
        fetchOnLoad: state.home.fetchOnLoad,
        sort: state.home.sort,
        page: state.home.page,
        searchTerm: state.home.searchTerm,
        loading: state.home.loading,
        more_loading: state.home.more_loading,
        user: state.auth.userData,
        reachedEnd: state.home.reachedEnd,
        error: state.home.error
    }
}

export default connect(mapStateToProps, { fetchPosts, fetchMorePosts, homeUpdated })(Feed);
