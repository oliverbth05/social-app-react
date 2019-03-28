import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, notPostError } from '../actions';

import PostMenu from './PostMenu';
import Author from './Author';
import UserOwned from './UserOwned';
import Loader from '../../../components/ui/Loader';
import PostError from './PostError';
import OtherPosts from './OtherPosts';

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
      return <PostError error={this.props.error} />
    }

    else if (this.props.post_loading || this.props.post === null) {
      return <Loader halfscreen />
    }

    let isUserOwned = this.props.user._id === this.props.post.author._id;

    return (
      <div className='m-t-3'>
        <div className='m-t-3 m-b-1'>
          <div>
            {isUserOwned ? <UserOwned postId={this.props.post._id} /> : null}

            { this.props.post.category ?
            <h3 className = 'font-light color-primary text-center p-a-1'>{`${this.props.post.category[0].toUpperCase()}${this.props.post.category.slice(1)}`}</h3>
            : null }

            <h2 className='post-heading'>{this.props.post.title}</h2>
            {this.props.post.caption ? <h4 className='post-caption'>{this.props.post.caption}</h4> : null}
            <Author date={this.props.post.date} authorName={this.props.post.author.userName} authorId={this.props.post.author._id} />
            {this.props.post.image ? <img src={this.props.post.image} className='post-image' /> : null}
            <p className='post-body'>{this.props.post.body}</p>
            {this.props.post.tags.map(tag => {
              return <span className='color-primary font-light m-r-s'>{tag}</span>
            })}

          </div>

          <PostMenu />

          { this.props.post.otherPosts.length > 1 ?
          <div>
            <h4 className = 'font-normal m-t-2 m-b-1'>Other posts from {this.props.post.author.userName}</h4>
            <OtherPosts posts={this.props.post.otherPosts} excludeId={this.props.post._id} />
          </div>
          : null }


        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post.data,
  user: state.auth.userData,
  post_loading: state.post.post_loading,
  error: state.post.error
})

export default connect(mapStateToProps, { fetchPost, notPostError })(Post)
