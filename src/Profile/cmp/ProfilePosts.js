import React from 'react';
import { connect } from 'react-redux';
import { fetchUserProfilePosts } from '../actions';

import Loader from '../../cmp/Loader';
import PostCard from '../../Home/cmp/PostCard';
import OtherPosts from '../../Show/cmp/OtherPosts';

class ProfilePosts extends React.Component {
    
    componentDidMount() {
        this.props.fetchUserProfilePosts(this.props.user_id)
    }
    
    renderPosts(posts) {
        if (posts.length < 1) {
            return <p>No posts.</p>
        }
        return posts.map(post => {
            return <PostCard {...post}/>
        })
    }
    
    render() {
        if (this.props.loading || !this.props.posts) {
            return <Loader halfscreen />
        }
        return (
            <div className = 'profile-section'>
               
                <h4 className = 'profile-section__header'>Posts <span className = 'font-light color-white'>{this.props.posts.length}</span></h4>
                  
                <div className = 'profile-section__content'>
                    <OtherPosts posts = {this.props.posts} />
                </div>
                
            </div>
           
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.profile.posts,
        loading: state.loading.profile_posts_loading,
    }
}

export default connect(mapStateToProps, {fetchUserProfilePosts})(ProfilePosts);