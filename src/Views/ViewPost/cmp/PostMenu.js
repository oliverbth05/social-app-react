import React from 'react';
import { connect } from 'react-redux';
import { likePost, pinPost } from '../actions';
import ActionButton from '../../../components/ui/ActionButton';

class PostMenu extends React.Component {

    render() {


        return ( 
            <div className='post-menu'>
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
                        post: {
                            _id: this.props.post._id
                        },
                        user: {
                            _id: this.props.user._id,
                            userName: `${this.props.user.firstName} ${this.props.user.lastName}`
                        },
                        author: {
                            _id: this.props.post.author._id,
                            userName: this.props.post.author.userName
                        }
                    })}}>
                        <i className="far fa-thumbs-up"></i> Like
                    </ActionButton>

                    <ActionButton
                    disabledMessage = 'Pinned'
                    array = {this.props.user.pins.map(pin => pin.post._id)}
                    item = {this.props.post._id}
                    loading = {this.props.pin_loading}
                    onClick = {() => {
                        this.props.pinPost({
                            post: {
                                _id: this.props.post._id,
                                title: this.props.post.title
                            },
                            userId: this.props.user._id,
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
