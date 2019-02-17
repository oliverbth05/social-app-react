import React, { Component } from 'react'
import { connect } from 'react-redux';
import isAuthenticated from '../hoc/isAuthenticated';
import Loader from '../cmp/Loader';
import RulesModal from './cmp/RulesModal';
import { createPost } from './actions';
import Tag from '../cmp/Tag';
import Author from '../Show/cmp/Author';
import Preview from './cmp/Preview';

class New extends Component {

  constructor() {
    super(); 
    this.inputHandler = this.inputHandler.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  state = {
    
    rulesModal: false,
    
    title: '',
    caption: '',
    image: '',
    body: '',
    tags: [],
    tagField: ''
  }

  inputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  toggleRulesModal() {
    this.setState({
      rulesModal: !this.state.rulesModal
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
        caption: this.state.caption,
        body: this.state.body,
        image: this.state.image,
        tags: this.state.tags,
        user_id: this.props.user._id,
        user_name: `${this.props.user.first_name} ${this.props.user.last_name}`,
        token: this.props.token
      }, this.props)
    }

  }

  render() {
    
    if (this.props.loading) {
      return <Loader fullscreen />
    }
    return (
      
      <div className = 'container'>
        { this.state.rulesModal ? <RulesModal toggle = {this.toggleRulesModal.bind(this)}/> : null }
        <div className = 'border-bottom p-b-1'>
          <h2 className='font-normal m-t-2 m-b-1 text-center'>New Post</h2>
          <button onClick = {this.toggleRulesModal.bind(this)} className = 'button m-r-s'><i class="fas fa-info-circle"></i> Styling Rules</button>
        </div>
        
        
        <div className='flex-2'>
          <div className = 'flex-item m-a-1'>
            <h3 className = 'font-normal text-center'>Editor</h3>
            <form onSubmit={this.submitPost} className='post-form'>

              <div className='post-form__divider'>
                <label className='post-form__label'>Title</label>
                <input onChange={this.inputHandler} className='input-block' name='title' type='text' value={this.state.title} />
              </div>
              
              <div className='post-form__divider'>
                <label className='post-form__label'>Caption</label>
                <input onChange={this.inputHandler} className='input-block' name='caption' type='text' value={this.state.caption} />
              </div>
  
              <div className='post-form__divider'>
                <label className='post-form__label'>Body</label>
                <textarea onChange={this.inputHandler} className='textarea-large' name='body' type='text' value={this.state.body}></textarea>
              </div>
              
              <div className='post-form__divider'>
                <label className='post-form__label'>Image (URL)</label>
                <input onChange={this.inputHandler} className='input-block' name='image' type='text' value={this.state.image}></input>
              </div>
  
              <div class='post-form__divider'>
                <label className='post-form__label'>Tags</label>
                <input onChange={this.inputHandler} className='input-block' type='text' value={this.state.tagField} name='tagField' />
                <button onClick={this.addTag} className='button m-t-1' >Add tag</button>
  
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
          
          <Preview
            title = {this.state.title}
            caption = {this.state.caption}
            body= {this.state.body}
            image = {this.state.image}
          />
      
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userData,
    token: state.user.token,
    loading: state.loading.new_loading
  }
}

export default connect(mapStateToProps, { createPost })(isAuthenticated(New))