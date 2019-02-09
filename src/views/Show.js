import React from 'react';
import { connect } from 'react-redux';
import isAuthenticated from '../hoc/isAuthenticated';
import { fetchPost } from '../store/actions';
import Loader from '../cmp/Loader';
import { Link } from 'react-router-dom';
import Comments from '../cmp/Comments';
import moment from 'moment';
import PostMenu from '../cmp/PostMenu';


class Show extends React.Component {
    
    
    state = {
        commentField: ''
    }
    
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
    }
    
    render() {
        if (this.props.show === null || this.props.loading) {
            return <Loader fullscreen />
        }
        
        else {
            return(
                <div className = 'container'>
                    <div className = 'box m-b-1'>
                        <img className = 'avatar' src = {`https://api.adorable.io/avatars/130/${this.props.show.post.user_name}.png`} />
                        <Link to = {`/user/${this.props.show.post.user_id}`} className = 'text-center font-normal m-b-2'> {this.props.show.post.user_name}</Link>
                        <h3 className = 'm-b-1 text-center'>{this.props.show.post.title}</h3>
                        <p className = 'm-b-1'>{this.props.show.post.body}</p>
                        <p>{ moment(this.props.show.post.date).fromNow()}</p>
                        <span><i className="far fa-eye"></i> {this.props.show.post.views}  </span>
                        <span><i className="far fa-thumbs-up"></i> {this.props.show.post.likes.length} </span>
                    </div>
                    
                    <PostMenu
                        like_loading = {this.props.show.like_loading}
                        pin_loading = {this.props.show.pin_loading}
                        can_pin = {true}
                        can_like = {true}
                        postPin = {() => {console.log('asd')}}
                        postLike = {() => {console.log('asd')}}
                    />
                    
                    <div className = 'box'>
                        <h3 class = 'font-light'>Comments</h3>
                        <form className = 'm-b-1'>
                            <input className = 'input-small m-r-s' name = 'commentField' onChange = {this.inputHandler.bind(this)} value = {this.state.commentField}/>
                            <button className = 'button'>Submit</button>
                        </form>
                        <Comments comments = {this.props.show.comments} />
                    </div>
                    
                    
                    
                    
                </div>
            )
        }
      
        
    }
}

const mapStateToProps = state => {
    return {
        show: state.show,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchPost})(isAuthenticated(Show))