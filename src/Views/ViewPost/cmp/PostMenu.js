import React from 'react';
import { connect } from 'react-redux';

import { likePost, pinPost } from '../actions';

import LikeButton from './LikeButton';
import PinButton from './PinButton';

class PostMenu extends React.Component {

    render() {

        let likes = this.props.post.likes;
        let user_id = this.props.user._id;
        let canLike = !likes.includes(user_id);

        let pins = this.props.user.pins.map(pin => pin.post_id);
        let post_id = this.props.post._id;
        let canPin = !pins.includes(post_id);

        return (
            <div className='post-menu'>
                <div>
                    <span className='m-r-1 font-light'><i className="far fa-thumbs-up"></i> Likes: {this.props.post.likes.length}</span>
                    <span className='font-light'><i className="far fa-eye"></i>  Views: {this.props.post.views}</span>
                </div>

                <div>
                    <LikeButton
                        token={this.props.token}
                        loading={this.props.like_loading}
                        likePost={this.props.likePost}
                        disabled={!canLike}
                        post_id={this.props.post._id}
                        user_id={this.props.user._id}
                        author_id={this.props.post.author_id}
                        user_name={`${this.props.user.first_name} ${this.props.user.last_name}`}
                    ></LikeButton>

                    <PinButton
                        token={this.props.token}
                        loading={this.props.pin_loading}
                        pinPost={this.props.pinPost}
                        disabled={!canPin}
                        post_id={this.props.post._id}
                        post_title={this.props.post.title}
                        user_id={this.props.user._id}
                    ></PinButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        post: state.post.data,
        user: state.user.userData,
        token: state.user.token,
        post_loading: state.post.post_loading,
        like_loading: state.post.like_loading,
        pin_loading: state.post.pin_loading,
    }
)

export default connect(mapStateToProps, { likePost, pinPost })(PostMenu);