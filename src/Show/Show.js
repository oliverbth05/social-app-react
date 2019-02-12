import React from 'react';

import isAuthenticated from '../hoc/isAuthenticated';
import Comments from './cmp/Comments';
import Post from './cmp/Post';
import CommentForm from './cmp/CommentForm';

class Show extends React.Component {

    render() {
        return (
 
            <div className='container'>

                <Post routerparam = {this.props.match.params.id}/>
                <CommentForm routerparam = {this.props.match.params.id} />
                <Comments routerparam = {this.props.match.params.id} />
                
            </div>
            
        )
    }
}



export default isAuthenticated(Show)