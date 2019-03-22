import React from 'react';
import { connect } from 'react-redux';
import PostListItem from '../../Home/cmp/PostListItem';
import Loader from '../../../components/ui/Loader';

class SearchResults extends React.Component {
    
    renderPosts(posts) {
        return posts.map(post => {
            return <PostListItem {...post} />
        })
    }
    
    render() {
        if (this.props.loading || this.props.posts === null) {
            return <Loader halfscreen/>
        }

        
        return (
            <div>
                <h3 className = 'font-light text-center p-b-2'>'{this.props.searchTerm}' <span className = 'color-primary font-light'>{this.props.posts.length} showing</span></h3>
                {this.renderPosts(this.props.posts)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.search.posts,
        loading: state.search.loading,
        searchTerm: state.search.searchTerm
    }
}

export default connect(mapStateToProps, {})(SearchResults);