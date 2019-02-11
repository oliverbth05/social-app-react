import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, likePost, pinPost } from '../store/actions/show';
import { isMember } from '../util';

import isAuthenticated from '../hoc/isAuthenticated';
import Loader from '../cmp/Loader';
import Comments from '../cmp/Comments';
import PostMenu from '../cmp/PostMenu';
import Post from '../cmp/Post';

class Show extends React.Component {

    state = {
        commentField: ''
    }

    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
    }

    render() {
        if (this.props.show === null || this.props.post_loading) {
            return <Loader fullscreen />
        }

        else {

            //Has the post already been liked by the user
            let likes = this.props.show.post.likes;
            let user_id = this.props.user._id;
            let canLike = !isMember(likes, user_id)

            //Has the post already been pinned by the user
            let pins = this.props.user.pins.map(pin => pin.post_id);
            let post_id = this.props.show.post._id;
            let canPin = !isMember(pins, post_id)

            console.log(pins, post_id, canPin)

            console.log(canLike, canPin)

            return (

                <div className='container'>

                    <Post
                        user_name={this.props.show.post.user_name}
                        user_id={this.props.show.post.user_id}
                        title={this.props.show.post.title}
                        body={this.props.show.post.body}
                        date={this.props.show.post.date}
                        likes={this.props.show.post.likes}
                        views={this.props.show.post.views}
                    />

                    <PostMenu
                        post_id={this.props.show.post._id}
                        post_title={this.props.show.post.title}
                        user_id={this.props.user._id}
                        like_loading={this.props.like_loading}
                        pin_loading={this.props.pin_loading}
                        canPin={canPin}
                        canLike={canLike}
                        pinPost={this.props.pinPost}
                        likePost={this.props.likePost}
                    />

                    <div className='box'>
                        <h3 className='font-light'>Comments</h3>
                        <form className='m-b-1'>
                            <input className='input-small m-r-s' name='commentField' onChange={this.inputHandler.bind(this)} value={this.state.commentField} />
                            <button className='button'>Submit</button>
                        </form>
                        <Comments comments={this.props.show.comments} />
                    </div>

                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        show: state.show,
        post_loading: state.loading.post_loading,
        like_loading: state.loading.like_loading,
        pin_loading: state.loading.pin_loading,
        user: state.user.userData
    }
}

export default connect(mapStateToProps, { fetchPost, likePost, pinPost })(isAuthenticated(Show))