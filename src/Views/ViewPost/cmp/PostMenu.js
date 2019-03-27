import React from 'react';
import { connect } from 'react-redux';

import { likePost, pinPost } from '../actions';
import ActionButton from './ActionButton';

class PostMenu extends React.Component {

    render() {

        let likes = this.props.post.likes;
        let user_id = this.props.user._id;
        let canLike = !likes.includes(user_id);

        let pins = this.props.user.pins.map(pin => pin.post_id);
        let post_id = this.props.post._id;
        let canPin = !pins.includes(post_id);

        return (
            <div className='post-menu m-b-3'>
                <div>
                    <span className='m-r-1 font-light'><i className="far fa-thumbs-up"></i> Likes: {this.props.post.likes.length}</span>
                    <span className='font-light'><i className="far fa-eye"></i>  Views: {this.props.post.views}</span>
                </div>

                <div>
                    <ActionButton
                    disabledMessage = 'Liked'
                    array = {this.props.post.likes}
                    item = {this.props.user._id}
                    loading = {this.props.like_loading}
                    onClick = {() => {this.props.likePost({
                        post_id : this.props.post._id,
                        user_id: this.props.user._id,
                        user_name: this.props.post.user_name,
                        author_id: this.props.post.author_id
                    })}}>
                        <i className="far fa-thumbs-up"></i> Like
                    </ActionButton>

                    <ActionButton
                    disabledMessage = 'Pinned'
                    array = {this.props.user.pins.map(pin => pin.post_id)}
                    item = {this.props.post._id}
                    loading = {this.props.pin_loading}
                    onClick = {() => {this.props.pinPost({
                        post_id: this.props.post._id,
                        user_id: this.props.user._id,
                        post_title: this.props.post.title
                    })}}>
                        <i className="fas fa-map-pin"></i> Pin
                    </ActionButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    post: state.post.data,
    user: state.auth.userData,
    post_loading: state.post.post_loading,
    like_loading: state.post.like_loading,
    pin_loading: state.post.pin_loading,
})

export default connect(mapStateToProps, { likePost, pinPost })(PostMenu);
