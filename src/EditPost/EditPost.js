import React              from 'react';
import { connect }        from 'react-redux';
import { 
  fetchEditPost,
  deletePost,
  updatePost,
  resetEditPost }         from './actions';
  
import isAuthenticated    from '../hoc/isAuthenticated';
import Loader             from '../cmp/Loader';
import Tag                from '../cmp/Tag';
import RulesModal         from '../New/cmp/RulesModal';
import ActionModal        from '../cmp/ActionModal';
import Preview            from '../New/cmp/Preview';


class EditPost extends React.Component {
    
    constructor() {
      super();
      this.inputHandler = this.inputHandler.bind(this);
      this.addTag = this.addTag.bind(this);
      this.removeTag = this.removeTag.bind(this);
      this.updatePost = this.updatePost.bind(this);
    }
   
    componentDidMount() {
        this.props.fetchEditPost(this.props.match.params.id)
    }
    
    componentWillUnmount() {
      this.props.resetEditPost()
    }
    
    componentDidUpdate() {
        if (this.props.postData !== null && !this.state.firstLoaded) {
            this.setState({
                firstLoaded: true,
                title: this.props.postData.title,
                caption: this.props.postData.caption,
                image: this.props.postData.image,
                body: this.props.postData.body,
                tags: this.props.postData.tags,
                _id: this.props.postData._id
            })
        }
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
  
  updatePost(e) {
    e.preventDefault();
    
    if (this.state.title && this.state.body) {
      
      var data = {
        ...this.state,
        token: this.props.token
      }
      
      delete data.rulesModal;
      delete data.firstLoaded;
      
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
        title: '',
        caption: '',
        image: '',
        body: '',
        tags: [],
        tagField: '',
        _id: ''
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
            <form onSubmit={this.updatePost} className='post-form'>

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
            title = {this.state.title}
            caption = {this.state.caption}
            body= {this.state.body}
            image = {this.state.image}
            tags = {this.state.tags}
          />
          :null }
      
      </div>
      </div>
    )
  }
}
  
const mapStateToProps = state => {
    return {
        loading: state.loading.edit_post_loading,
        postData: state.edit_post,
        token: state.user.token
    }
}

export default connect(mapStateToProps, {fetchEditPost, deletePost, updatePost, resetEditPost})(isAuthenticated(EditPost))