import React                from 'react';
import { connect }          from 'react-redux';
import { isMember }         from '../../util';
import { 
    fetchPosts,
    fetchMorePosts,
    homeUpdated }           from '../actions';

import PostCard             from './PostCard';
import PostListItem         from './PostListItem';
import Loader               from '../../cmp/Loader';

class Posts extends React.Component {
    
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
                <div className = 'home-grid'>
                {posts.map(post => {
                    var pinned = this.props.user.pins.map(pin => {
                        return pin.post_id
                    })
                    var isPinned = isMember(pinned, post._id)
                    return (
                        <PostCard key={post._id} {...post} user_id = {this.props.user._id} isPinned = {isPinned}/>
                    )
                 })}
                </div>
            )
        }
        
        else {
            return (
                <div>
                {posts.map(post => {
                    var pinned = this.props.user.pins.map(pin => {
                        return pin.post_id
                    })
                    var isPinned = isMember(pinned, post._id)
                    return (
                        <PostListItem key={post._id} {...post} user_id = {this.props.user._id} isPinned = {isPinned}/>
                    )
                 })}
                </div>
            )
        }
    }
    
    render() {
        if (this.props.loading || this.props.posts === null) {
            return (
                <Loader fullscreen/>
            )
        }
        return (
            <div>
               {this.renderPosts(this.props.posts, this.props.layout)}
               { this.props.more_loading ? <Loader small /> : null }
               { this.props.reachedEnd ? <h3 className = 'text-center color-primary font-light m-t-3'>No More Posts</h3> : null}
               { !this.props.more_loading && !this.props.reachedEnd ? <button disabled = {this.props.more_loading ? true : false} onClick = {() => {this.props.fetchMorePosts(this.props.sort, this.props.page)}} className = 'btn btn-primary btn-block btn-round m-t-3'>Show More</button> : null }
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
        loading: state.loading.posts_loading,
        more_loading: state.loading.more_posts_loading,
        user: state.user.userData,
        reachedEnd: state.home.reachedEnd
    }
}

export default connect(mapStateToProps, { fetchPosts, fetchMorePosts, homeUpdated })(Posts);