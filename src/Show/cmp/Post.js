import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import PostMenu from './PostMenu';
import { isMember } from '../../util';
import { fetchPost, likePost, pinPost } from '../actions';
import Loader from '../../cmp/Loader';
class Post extends React.Component {
  
  
  componentDidMount() {
    this.props.fetchPost(this.props.routerparam)
  }
  
  render() {
    
    if (this.props.post_loading || this.props.post === undefined || this.props.post === null) {
      return <Loader />
    }

    let likes = this.props.post.likes;
    let user_id = this.props.user._id;
    let canLike = !isMember(likes, user_id)
            
    let pins = this.props.user.pins.map(pin => pin.post_id);
    let post_id = this.props.post._id;
    let canPin = !isMember(pins, post_id)
    
    return (
      
      <div>
        <div className='box m-b-1'>
          <img alt = 'user avatar' className='avatar' src={`https://api.adorable.io/avatars/130/${this.props.user.user_name}.png`} />
          <Link to={`/user/${this.props.user_id}`} className='text-center font-normal m-b-2'> {this.props.user.user_name}</Link>
          <h3 className='m-b-1 text-center font-normal'>{this.props.post.title}</h3>
          <p className='m-b-1'>{this.props.post.body}</p>
          <p>{moment(this.props.post.date).fromNow()}</p>
          <span><i className="far fa-eye"></i> {this.props.post.views}  </span>
          <span><i className="far fa-thumbs-up"></i> {this.props.post.likes.length} </span>
        </div>
      
        <PostMenu
          post_id={this.props.post._id}
          post_title={this.props.post.title}
          user_id={this.props.user._id}
          like_loading={this.props.like_loading}
          pin_loading={this.props.pin_loading}
          canPin={canPin}
          canLike={canLike}
          pinPost={this.props.pinPost}
          likePost={this.props.likePost}
        />
        
      </div>
   
  )
  }

}

const mapStateToProps = state => {
  return {
    post: state.post,
    user: state.user.userData,
    post_loading: state.loading.post_loading,
    like_loading: state.loading.like_loading,
    pin_loading: state.loading.pin_loading,
  }
}

export default connect(mapStateToProps, {fetchPost, likePost, pinPost})(Post)
