import React from 'react';
import isAuthenticated from '../hoc/isAuthenticated';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import Loader from '../cmp/Loader';
import PostCard from './cmp/PostCard';
import { Link } from 'react-router-dom';
import { isMember } from '../util';

class Home extends React.Component {

    componentDidMount() {
        if (this.props.posts === null) {
            this.props.fetchPosts()
        }
    }

    renderPosts(posts) {
        return posts.map(post => {

            var pinned = this.props.user.pins.map(pin => {
                return pin.post_id
            })

            var isPinned = isMember(pinned, post._id)

            return (
                <PostCard key={post._id} {...post} user_id = {this.props.user._id} isPinned = {isPinned}/>
            )
        })
    }

    render() {

        if (this.props.loading || this.props.posts === null) {
            return <Loader fullscreen />
        }

        return (
            <div className='container m-t-3'>

                <nav className = 'home-nav'>
                    <Link className = 'button m-r-1' to='/new'><i className="fas fa-pen"></i> New Post</Link>
                    <div>
                    <input className = 'input-small' /> <button className = 'button'><i className="fas fa-search"></i></button>
                    </div>
                </nav>


                


                <h2 className='font-light border-bottom'>Feed <span className = 'color-primary'>{this.props.posts.length} showing</span></h2>
                {this.renderPosts(this.props.posts)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.home,
        loading: state.loading.posts_loading,
        user: state.user.userData
    }
}

export default connect(mapStateToProps, { fetchPosts })(isAuthenticated(Home))