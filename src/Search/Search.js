import React from 'react';
import SearchForm from './cmp/SearchForm';
import SearchResults from './cmp/SearchResults';
import {searchPosts, searchUpdated} from './actions';

import { connect } from 'react-redux';

class Search extends React.Component {
    
    
    componentDidMount() {
        if (!this.props.posts || this.props.fetchOnLoad) {
            this.props.searchPosts({sort: this.props.sort, page: this.props.page, searchTerm: this.props.match.params.searchTerm})
            this.props.searchUpdated();
        } 
    }  
    
    
    render() {
        return (
            <div className = 'container'>
            <SearchForm />
            <SearchResults />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sort: state.search.sort,
        page: state.search.page,
        searchTerm: state.search.searchTerm,
        fetchOnLoad: state.search.fetchOnLoad
    }
}

export default connect(mapStateToProps, {searchPosts, searchUpdated})(Search);