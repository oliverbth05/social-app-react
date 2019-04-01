import React from 'react'
import { connect } from 'react-redux';
import { createPost } from './actions';
import { reduxForm, Field } from 'redux-form';
import { formValueSelector } from 'redux-form';

import IsAuthenticated from '../../components/hoc/IsAuthenticated';
import Loader from '../../components/ui/Loader';
import Tag from '../../components/ui/Tag';
import SubmitButton from '../../components/ui/SubmitButton';

class New extends React.Component {

  constructor() {
    super();
    this.state = {
      tags: [],
      tagField: ''
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  componentDidMount() {
    document.title = 'New Post'
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

  renderInput({ input, meta, label, type, disabled }) {

    return (
      <div className='post-form__divider'>
        <label className='post-form__label'>{label}
          {meta.error && meta.submitFailed ?
            <span className='color-secondary font-light font-small m-l-1'>{meta.error}</span> : null}
        </label>
        {input.name === 'body' ?
          <textarea {...input} disabled={disabled} className='textarea-large' type={type}></textarea>
          :
          <input {...input} disabled={disabled} className='input-block' type={type} />
        }
      </div>
    )
  }

  renderSelect({ input, label, type, meta: { touched, error, submitFailed }, children, disabled }) {

    return (
      <div className='post-form__divider'>
        <label className='post-form__label'>{label}
          {error && submitFailed ?
            <span className='color-secondary font-light font-small m-l-1'>{error}</span> : null}</label>
        <select className='select' disabled={disabled} {...input}>
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
      author: {
        _id: this.props.user._id,
        userName: `${this.props.user.firstName} ${this.props.user.lastName}`
      }
    }, this.props)
  }

  render() {
    return (

      <div className='container'>
        <div className='flex-2'>
          <div className='flex-item m-a-1 p-a-1'>
            <h3 className='font-normal text-center p-b-2'>Editor</h3>
            <form onSubmit={this.props.handleSubmit(this.submitPost.bind(this))} className='post-form'>
              <Field name='category' label='Category' disabled={this.props.loading} component={this.renderSelect} className='select'>
                <option value=''>Select one</option>
                <option value='politics'>Politics</option>
                <option value='culture'>Culture</option>
                <option value='film'>Film</option>
                <option value='television'>Television</option>
                <option value='business'>Business</option>
                <option value='technology'>Technology</option>
                <option value='music'>Music</option>
                <option value='art'>Art</option>
              </Field>
              <Field name='title' component={this.renderInput} disabled={this.props.loading} type='text' label='Title' />
              <Field name='caption' component={this.renderInput} disabled={this.props.loading} type='text' label='Caption' />
              <Field name='body' component={this.renderInput} disabled={this.props.loading} type='text' label='Body' />
              <Field name='image' component={this.renderInput} disabled={this.props.loading} type='text' label='Image URL' />
              <div class='post-form__divider'>
                <label className='post-form__label'>Tags</label>
                <input onChange={this.inputHandler} disabled={this.props.loading} className='input-block' type='text' value={this.state.tagField} name='tagField' />
                <button onClick={this.addTag} className='btn btn-primary m-t-1' >Add tag</button>

                {this.state.tags.length > 0 ?
                  <div class='tag__container'>

                    {this.state.tags.map((tag, index) => {
                      return <Tag onClick={this.removeTag} index={index}>{tag}</Tag>
                    })
                    }
                  </div>
                  : null}
              </div>
              <div className='post-form__divider'>
                <SubmitButton loading={this.props.loading}>Create Post</SubmitButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const selector = formValueSelector('post');

const mapStateToProps = state => ({
  user: state.auth.userData,
  loading: state.createPost.loading,
  title: selector(state, 'title'),
  category: selector(state, 'category'),
  caption: selector(state, 'caption'),
  body: selector(state, 'body'),
  image: selector(state, 'image'),
})

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

export default reduxForm({ form: 'post', validate })(Connected)
