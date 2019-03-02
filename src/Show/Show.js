import React from 'react';

import isAuthenticated from '../hoc/isAuthenticated';
import Comments from './cmp/Comments';
import Post from './cmp/Post';
import ShowNav from './cmp/ShowNav';

class Show extends React.Component {

    render() {
        return (
 
            <div className='container-1000 m-t-3'>
                <ShowNav history = {this.props.history} />
                <Post routerparam = {this.props.match.params.id}/>
                <Comments routerparam = {this.props.match.params.id} />
            </div>
            
        )
    }
}



export default isAuthenticated(Show)