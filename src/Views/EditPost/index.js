import React              from 'react';
import { connect }        from 'react-redux';
import { 
  fetchEditPost,
  deletePost,
  updatePost, 
  resetEditPost }         from './actions';
import { reduxForm, Field } from 'redux-form';
import { formValueSelector } from 'redux-form';
  
import isAuthenticated    from '../../components/hoc/isAuthenticated';
import Loader             from '../../components/ui/Loader';
import Tag                from '../../components/ui/Tag';
import RulesModal         from '../CreatePost/cmp/RulesModal';
import ActionModal        from '../../components/ui/ActionModal';
import Preview            from '../CreatePost/cmp/Preview';


class EditPost extends React.Component {
    
    constructor() {
      super();
      this.addTag = this.addTag.bind(this);
      this.removeTag = this.removeTag.bind(this);
      this.updatePost = this.updatePost.bind(this);
    }
   
    componentDidMount() {
        this.props.fetchEditPost(this.props.match.params.id)
        document.title = 'Edit Post'
    }
    
    componentWillUnmount() {
      this.props.resetEditPost()
    }
    
    componentDidUpdate() {
        if (this.props.postData !== null && !this.state.firstLoaded) {
            this.setState({
                firstLoaded: true,
                tags: this.props.postData.tags,
                _id: this.props.postData._id
            })
            this.props.initialize({
              title: this.props.postData.title,
              body: this.props.postData.body,
              caption: this.props.postData.caption,
              category: this.props.postData.category,
              image: this.props.postData.image
            })
        }
    }
    
  toggleRulesModal() {
    this.setState({
      rulesModal: !this.state.rulesModal
    })
  }
  
  togglePreview() {
    this.setState({
      showPreview: !this.state.showPreview
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
  
  updatePost(formValues) {
    
    if (this.props.title && this.props.body && this.props.category) {
      
      var data = {
        tags: this.state.tags,
        title: formValues.title,
        caption: formValues.caption,
        body: formValues.body,
        category: formValues.category,
        image: formValues.image,
        _id : this.state._id
      }
      
      this.props.updatePost(data, this.props);
    }
    
  }
  
  deletePost() {
    this.props.deletePost({token: this.props.token, _id: this.state._id}, this.props)
  }
  
  toggleDeleteModal(e) {
    this.setState({
      deleteModal: !this.state.deleteModal
    })
  }

    state = {
        rulesModal: false,
        deleteModal: false,
        firstLoaded: false,
        showPreview: false,
        tags: [],
        tagField: '',
        _id: ''
    }
    
    renderInput({input, meta, label, type}) {
    
    
    return (
      <div className= 'post-form__divider'>
        <label className = 'post-form__label'>{label}
        {meta.error && meta.submitFailed ? 
        <span className = 'color-secondary font-light font-small m-l-1'>{meta.error}</span> : null }
        </label>
        {input.name === 'body' ?
        <textarea {...input} className = 'textarea-large' type = {type}></textarea>
        :
        <input {...input} className = 'input-block' type = {type}/>
        }
      </div>
    )
  }
  
  renderSelect({ input, label, type, meta: { touched, error, submitFailed }, children }) {
    
    
    return (
        <div className = 'post-form__divider'>
          <label className = 'post-form__label'>{label}
          {error && submitFailed ? 
          <span className = 'color-secondary font-light font-small m-l-1'>{error}</span> : null }</label>
          <select className = 'select' {...input}>
           {children}
          </select>
          
        </div>
    )
  } 

    
    render() {
    
    if (this.props.loading) {
      return <Loader fullscreen />
    }
    
    return (
      
      <div className = 'container'>
        { this.state.rulesModal ? <RulesModal toggle = {this.toggleRulesModal.bind(this)}/> : null }
        { this.state.deleteModal ? 
        <ActionModal 
        toggle = {this.toggleDeleteModal.bind(this)} 
        action = {() => {this.deletePost()}}
        actionType = {'Delete'}
        title = {'Delete Post'}
        content = {'Are you sure you want to delete this post?'}/>
        : null }

        <h4 className = 'text-center font-normal alert p-a-1 color-primary m-b-2'>Editing Post</h4>

        <div className='flex-2 '>
          <div className = 'flex-item m-a-1 box p-a-1'>
            <h3 className = 'font-normal text-center'>Editor</h3>
            <button onClick = {this.toggleRulesModal.bind(this)} className = 'btn btn-secondary btn-round m-r-s'><i class="fas fa-info-circle"></i> Styling Rules</button>
            <button onClick = {this.togglePreview.bind(this)} className = 'btn btn-primary btn-round'>{!this.state.showPreview ? <i class="far fa-eye-slash"></i> : <i class="fas fa-eye"></i>} Preview</button>
            
            <form onSubmit={this.props.handleSubmit(this.updatePost.bind(this))} className='post-form'>

              <Field name='category' label = 'Category' component= {this.renderSelect} className = 'select'>
                  <option value = ''>Select one</option>
                  <option value='politics'>Politics</option>
                  <option value='culture'>Culture</option>
                  <option value='film'>Film</option>
                  <option value = 'television'>Television</option>
                  <option value = 'business'>Business</option>
                  <option value = 'technology'>Technology</option>
                  <option value = 'music'>Music</option>
                  <option value = 'art'>Art</option>
              </Field>
            
              <Field name = 'title' component = {this.renderInput} type = 'text' label = 'Title' />
              
              <Field name = 'caption' component = {this.renderInput} type = 'text' label = 'Caption' />
              
              <Field name = 'body' component = {this.renderInput} type = 'text' label = 'Body' />
              
              <Field name = 'image' component = {this.renderInput} type = 'text' label = 'Image URL' />
  
              <div class='post-form__divider'>
                <label className='post-form__label'>Tags</label>
                <input onChange={this.inputHandler} className='input-block' type='text' value={this.state.tagField} name='tagField' />
                <button onClick={this.addTag} className='btn btn-primary m-t-1' >Add tag</button>
  
                <div class='tag__container'>
                  {this.state.tags.length > 0 ?
                    this.state.tags.map((tag, index) => {
                      return <Tag onClick={this.removeTag} index={index}>{tag}</Tag>
                    })
                    : null}
                </div>
              </div>
  
              <div className='post-form__divider'>
                <button className='btn-block btn btn-primary'><i class="fas fa-save"></i> Save Changes</button>
              </div>
          
            </form>
            
            <div className = 'post-form__divider'>
                <button onClick = { this.toggleDeleteModal.bind(this)}  className = 'btn btn-secondary'><i class="fas fa-trash"></i> Delete Post</button>
            </div>
          </div>
          
          {this.state.showPreview ?
          <Preview
            title = {this.props.title}
            caption = {this.props.caption}
            body= {this.props.body}
            image = {this.props.image}
            tags = {this.state.tags}
          />
          :null }
      
      </div>
      </div>
    )
  }
}
  
const selector = formValueSelector('editPost');
  
const mapStateToProps = state => {
    return {
        loading: state.editPost.loading,
        postData: state.editPost.postData,
        token: state.user.token,
        title: selector(state, 'title'),
        category: selector(state, 'category'),
        caption: selector(state, 'caption'),
        body: selector(state, 'body'),
        image: selector(state, 'image'),
    }
}

const validate = formValues => {
  const errors = {}
  
  if (!formValues.title) {
    errors.title = 'Post require a title.' 
  }
  
  if (!formValues.body) {
    errors.body = 'Post requires body text.'
  }
  
  if (!formValues.category) {
    errors.category = 'Post requires a category'
  }
  
  return errors;
}

const Connected = connect(mapStateToProps, {fetchEditPost, deletePost, updatePost, resetEditPost})(isAuthenticated(EditPost));
export default reduxForm({
  form: 'editPost',
  validate
})(Connected)