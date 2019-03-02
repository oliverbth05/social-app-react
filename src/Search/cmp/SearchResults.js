import React from 'react';
import { connect } from 'react-redux';
import PostListItem from '../../Home/cmp/PostListItem';
import Loader from '../../cmp/Loader';

class SearchResults extends React.Component {
    
    renderPosts(posts) {
        return posts.map(post => {
            return <PostListItem {...post} />
        })
    }
    
    render() {
        if (this.props.loading) {
            return <Loader halfscreen/>
        }
        
        if (this.props.posts === null) {
            return <div></div>
        }
        
        return (
            <div className = 'container-600'>
                {this.renderPosts(this.props.posts)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.search.posts,
        loading: state.loading.search_loading
    }
}

export default connect(mapStateToProps, {})(SearchResults);