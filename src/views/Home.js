import React from 'react';
import isAuthenticated from '../hoc/isAuthenticated';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions';
import Loader from '../cmp/Loader';
import PostCard from '../cmp/PostCard';

class Home extends React.Component {
    
    componentDidMount() {
        if (this.props.posts === null) {
            this.props.fetchPosts()
        }
    }

    renderPosts(posts) {
        return posts.map(post => {
            return (
                <PostCard key = {post._id} {...post} />
            )
        })
    }
    
    render() {

        if (this.props.loading || this.props.posts === null) {
            return <Loader fullscreen />
        }
        
        return (
            <div className = 'container'>
                <h1 className = 'font-light'>Feed</h1>
                {this.renderPosts(this.props.posts)} 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.home,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchPosts})(isAuthenticated(Home))