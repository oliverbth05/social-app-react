import React, { Component } from 'react'
import { connect } from 'react-redux';
import isAuthenticated from '../hoc/isAuthenticated';

import { createPost } from '../store/actions/new';
import Tag from '../cmp/Tag';

class New extends Component {

  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  state = {
    title: '',
    body: '',
    tags: [],
    tagField: ''
  }

  inputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTag(e) {
    e.preventDefault();
    if (this.state.tagField) {
      this.setState({
        tags: this.state.tags.concat(this.state.tagField),
        tagField: ''
      })
    }
  }

  removeTag(index) {
    var tags = [...this.state.tags];
    tags.splice(index, 1);
    this.setState({
      tags: tags
    })
  }

  submitPost(e) {
    e.preventDefault();

    if (this.state.title && this.state.body) {
      this.props.createPost({
        title: this.state.title,
        body: this.state.body,
        tags: this.state.tags,
        user_id: this.props.user._id,
        user_name: `${this.props.user.first_name} ${this.props.user.last_name}`
      })
    }

  }

  render() {
    return (
      <div className='container-flex-center'>

        <div className='container-700'>
          <form onSubmit={this.submitPost} className='post-form'>

            <h2 className='font-normal'>New Post</h2>

            <div className='post-form__divider'>
              <label className='post-form__label'>Title</label>
              <input onChange={this.inputHandler} className='input-block' name='title' type='text' value={this.state.title} />
            </div>

            <div className='post-form__divider'>
              <label className='post-form__label'>Body</label>
              <textarea onChange={this.inputHandler} className='textarea' name='body' type='text' value={this.state.body}></textarea>
            </div>

            <div class='post-form__divider'>
              <label class='post-form__label'>Tags</label>
              <input onChange={this.inputHandler} class='input-block' type='text' value={this.state.tagField} name='tagField' />
              <button onClick={this.addTag} class='button m-t-1' >Add tag</button>

              <div class='tag__container'>
                {this.state.tags.length > 0 ?
                  this.state.tags.map((tag, index) => {
                    return <Tag onClick={this.removeTag} index={index}>{tag}</Tag>
                  })
                  : null}
              </div>
            </div>

            <div className='post-form__divider'>
              <button className='button-block'>Submit</button>
            </div>

          </form>

        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userData
  }
}

export default connect(mapStateToProps, { createPost })(isAuthenticated(New))