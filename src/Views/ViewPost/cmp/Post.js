import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import PostMenu from './PostMenu';
import Author from './Author';


import { fetchPost, likePost, pinPost, notPostError } from '../actions';
import Loader from '../../../components/ui/Loader';
import PostError from './PostError';
import OtherPosts from './OtherPosts';

const isMember = (arr, member) => {
  return arr.indexOf(member) !== -1
}

const tagTypes = [
  ['=H1=', '<h1 class = "formatted-h1">' ],
  ['=/H1=', '</h1>'],
  ['=H2=', '<h2 class = "formatted-h2">'],
  ['=/H2=', '</h2>'],
  ['=H3=', '<h3 class = "formatted-h3">'],
  ['=/H3=', '</h3>'],
  ['=CODE=', '<span class = "code-section">'],
  ['=/CODE=', '</span>'],
  ['=I=', '<em>'],
  ['=/I=', '</em>'],
  ['=B=', '<strong>'],
  ['=/B=', '</strong>']
]

const replaceTags = (string, search, replacement) => {
  return string.split(search).join(replacement);
}

const replaceScriptTags = (string) => {
  return string.replace(new RegExp(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, 'g'), 'Nice Try.');
};

class Post extends React.Component {
 

  componentDidMount() {
    this.props.fetchPost(this.props.routerparam)
    
    window.scrollTo(0, 0)
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.routerparam !== prevProps.routerparam) {
      this.props.fetchPost(this.props.routerparam)
    }
    if (this.props.post) {
      document.title = this.props.post.title
    }
  } 
  
  componentWillUnmount() {
    if (this.props.error) {
      this.props.notPostError()
    }
  }
  
  render() { 
    

    if (this.props.error) {
      return <PostError error = {this.props.error} />
    }
    
    else if (this.props.post_loading || this.props.post === null) {
      return <Loader halfscreen/>
    }

    

      
    

    var parsedBody = this.props.post.body

    for (var i = 0; i < tagTypes.length; i++) {
      parsedBody = replaceTags(parsedBody, tagTypes[i][0], tagTypes[i][1]);
    }

    parsedBody = replaceScriptTags(parsedBody);

    let likes = this.props.post.likes;
    let user_id = this.props.user._id;
    let canLike = !isMember(likes, user_id);

    let pins = this.props.user.pins.map(pin => pin.post_id);
    let post_id = this.props.post._id;
    let canPin = !isMember(pins, post_id);
    
    let isUserOwned = this.props.user._id === this.props.post.user_id;

    return (
     
      <div className = 'm-t-3'>
        <div className='m-t-3 m-b-1'>
          <div>
            { isUserOwned ? 
              <div className = 'm-b-3 alert'>
                <h4 className = 'color-primary font-normal text-center'>You wrote this post</h4>
               
                <Link className = 'btn btn-primary btn-block' to = {`/edit/post/${this.props.post._id}`}><i class="far fa-edit"></i> Edit</Link>
              </div>
            : null }
            
            <h2 className='post-heading'>{this.props.post.title}</h2>
            {this.props.post.caption ? <h4 className='post-caption'>{this.props.post.caption}</h4> : null}
            <Author
              date={this.props.post.date}
              user_name={ this.props.post.user_name }
              user_id={this.props.post.user_id}
            />
            {this.props.post.image ? <img src = {this.props.post.image} className = 'post-image' /> : null }
            
            <p className='post-body' dangerouslySetInnerHTML = {{__html: parsedBody}}></p>
            {this.props.post.tags.map(tag => {
              return <span className = 'color-primary font-light m-r-s'>{tag }</span>
            })}
          </div>

          <PostMenu
            views={this.props.post.views}
            likes={this.props.post.likes.length}
            token={this.props.token}
            post_id={this.props.post._id}
            post_title={this.props.post.title}
            
            author_id = {this.props.post.user_id}
            user_name = {`${this.props.user.first_name} ${this.props.user.last_name}`}
            user_id={this.props.user._id}
            
            like_loading={this.props.like_loading}
            pin_loading={this.props.pin_loading}
            canPin={canPin}
            canLike={canLike}
            pinPost={this.props.pinPost}
            likePost={this.props.likePost}
          />
          
          <h4 className = 'font-normal m-t-2 m-b-1'>Other posts from {this.props.post.user_name}</h4>
          <OtherPosts posts = {this.props.post.otherPosts} user_name = {this.props.post.user_name} exclude_id = {this.props.post._id} />
        </div>
      </div>
      
      

    )
    }
  
}

const mapStateToProps = state => {
  return {
    post: state.post.data,
    user: state.user.userData,
    post_loading: state.post.post_loading,
    like_loading: state.post.like_loading,
    pin_loading: state.post.pin_loading,
    error: state.post.error
  }
}

export default connect(mapStateToProps, { fetchPost, likePost, pinPost, notPostError })(Post)