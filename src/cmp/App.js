import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Home from '../Home/Home';
import Show from '../Show/Show';
import New from '../New/New';
import Profile from '../Profile/Profile';
import EditComment from '../EditComment/EditComment';
import EditPost from '../EditPost/EditPost';
import Search from '../Search/Search';
import Nav from './Nav';
import PageNotFound from './PageNotFound';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/search/:searchTerm' component={Search} />
                        <Route exact path='/login' component={Login} /> 
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/show/:id' component={Show} />
                        <Route exact path='/edit/comment/:post_id/:comment_id' component={EditComment} />
                        <Route exact path='/edit/post/:id' component={EditPost} />
                        <Route exact path='/new' component={New} />
                        <Route exact path='/profile/:id' component={Profile} />
                        <Route path = '/*' component = {PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;