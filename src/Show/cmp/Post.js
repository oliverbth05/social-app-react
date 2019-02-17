import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import PostMenu from './PostMenu';
import Author from './Author';

import { isMember } from '../../util';
import { tagTypes, replaceTags, replaceScriptTags } from '../../util';
import { fetchPost, likePost, pinPost } from '../actions';
import Loader from '../../cmp/Loader';
class Post extends React.Component {
  
  
  componentDidMount() {
    this.props.fetchPost(this.props.routerparam)
  }
  
  render() {
    
    if (this.props.post_loading || this.props.post === undefined || this.props.post === null) {
      return <Loader halfscreen />
    }
    
    var parsedBody = this.props.post.body
    
    for (var i = 0; i < tagTypes.length; i++) {
        parsedBody = replaceTags(parsedBody, tagTypes[i][0], tagTypes[i][1]);
    }
    
    parsedBody = replaceScriptTags(parsedBody);

    

    let likes = this.props.post.likes;
    let user_id = this.props.user._id;
    let canLike = !isMember(likes, user_id)
            
    let pins = this.props.user.pins.map(pin => pin.post_id);
    let post_id = this.props.post._id; 
    let canPin = !isMember(pins, post_id)
    
    return (
      
      <div  >
        <div className = 'm-t-3 m-b-1'>
          
          
          <h2 className='post-heading'>{this.props.post.title}</h2>
          {this.props.post.caption ? <h4 className = 'post-caption'>{this.props.post.caption}</h4> : null }
          {this.props.post.image ? <img src = {this.props.post.image} className = 'post-image' /> : null }
          <Author
          date = {this.props.post.date}
          user_name = {this.props.post.user_name}
          user_id = {this.props.post.user_id}
          />
          <p className='post-body' dangerouslySetInnerHTML = {{__html: parsedBody}}></p>
          
          
          


          <span><i className="far fa-eye"></i> {this.props.post.views}  </span>
          <span><i className="far fa-thumbs-up"></i> {this.props.post.likes.length} </span>
        </div>
      
        <PostMenu
          token = {this.props.token}
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
    token: state.user.token,
    post_loading: state.loading.post_loading,
    like_loading: state.loading.like_loading,
    pin_loading: state.loading.pin_loading,
  }
}

export default connect(mapStateToProps, {fetchPost, likePost, pinPost})(Post)
