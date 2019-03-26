import React              from 'react'
import { connect }        from 'react-redux';
import { createPost }     from './actions';
import { reduxForm, Field } from 'redux-form';
import { formValueSelector } from 'redux-form';

import IsAuthenticated    from '../../components/hoc/IsAuthenticated';
import Loader             from '../../components/ui/Loader';
import RulesModal         from './cmp/RulesModal';
import Tag                from '../../components/ui/Tag';
import Preview            from './cmp/Preview';

class New extends React.Component {

  constructor() {
    super(); 
    this.inputHandler = this.inputHandler.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }
 
  state = {
    rulesModal: false,
    showPreview: false, 
    tags: [],
    tagField: ''
  }

  componentDidMount() {
    document.title = 'New Post'
  }
  
  togglePreview() {
    this.setState({
      showPreview: !this.state.showPreview
    })
  }

  inputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  toggleRulesModal(){
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

  submitPost(formValues) {

    if (!formValues.title || !formValues.body || !formValues.category) {
      return false
    }
    
    this.props.createPost({
      title: formValues.title,
      caption: formValues.caption,
      body: formValues.body,
      image: formValues.image,
      tags: this.state.tags,
      category: formValues.category,
      user_id: this.props.user._id,
      user_name: `${this.props.user.first_name} ${this.props.user.last_name}`
    }, this.props)
  }

  

  render() {
    
    console.log(this.props)
    
    if (this.props.loading) {
      return <Loader fullscreen />
    }
    return (
      
      <div className = 'container'>
        { this.state.rulesModal ? <RulesModal toggle = {this.toggleRulesModal.bind(this)}/> : null }

        <div className='flex-2'>
          <div className = 'flex-item m-a-1 box p-a-1'>
            <h3 className = 'font-normal text-center p-b-2'>Editor</h3>
            <button onClick = {this.toggleRulesModal.bind(this)} className = 'btn btn-secondary btn-round m-r-s'><i class="fas fa-info-circle"></i> Styling Rules</button>
            <button onClick = {this.togglePreview.bind(this)} className = 'btn btn-primary btn-round'>{!this.state.showPreview ? <i class="far fa-eye-slash"></i> : <i class="fas fa-eye"></i>} Preview</button>
            <form onSubmit={this.props.handleSubmit(this.submitPost.bind(this))} className='post-form'>
              
              
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
                <button className='btn-block btn btn-primary'>Submit</button>
              </div>
  
            </form>
          </div>
          {this.state.showPreview ?
          <Preview
            title = {this.props.title}
            caption = {this.props.caption}
            body= {this.props.body}
            image = {this.props.image}
            tags = {this.state.tags}
          />
          : null }
                
      </div>
      </div>
    )
  }
}

const selector = formValueSelector('post');


const mapStateToProps = state => {
  return {
    user: state.user.userData,
    token: state.user.token,
    loading: state.createPost.loading,
    title: selector(state, 'title'),
    category: selector(state, 'category'),
    caption: selector(state, 'caption'),
    body: selector(state, 'body'),
    image: selector(state, 'image'),
  }
}

const Connected = connect(mapStateToProps, { createPost })(IsAuthenticated(New))

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

export default reduxForm({
  form: 'post',
  validate
})(Connected)