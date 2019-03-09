import React                        from 'react';
import { connect }                  from 'react-redux';
import { 
    fetchPosts,
    changeLayout,
    changeSort }                    from './actions';
import { Link }                     from 'react-router-dom';

import isAuthenticated              from '../hoc/isAuthenticated';
import Loader                       from '../cmp/Loader';
import SortButton                   from './cmp/SortButton';
import PostCard                     from './cmp/PostCard';
import Posts                        from './cmp/Posts';
import HomeNav                      from './cmp/HomeNav';

class Home extends React.Component {
     
    render() {
        return (
            <div className='container nav-offset'>
                <HomeNav />
                <Posts />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.home.posts,
        layout: state.home.layout,
        sort: state.home.sort,
        searchTerm: state.home.searchTerm,
        page: state.home.page,
        loading: state.loading.posts_loading,
        user: state.user.userData
    }
}

export default connect(mapStateToProps, { fetchPosts, changeLayout, changeSort })(isAuthenticated(Home))