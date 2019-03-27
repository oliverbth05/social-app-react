import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Nav from './components/ui/Nav';
import PageNotFound from './components/ui/PageNotFound';

import Landing from './Views/Landing';
import Login from './Views/Login';
import Register from './Views/Register';
import Home from './Views/Home';
import ViewPost from './Views/ViewPost';
import CreatePost from './Views/CreatePost';
import Profile from './Views/Profile';
import EditComment from './Views/EditComment';
import EditPost from './Views/EditPost';
import Search from './Views/Search';
import Notifications from './Views/Notifications';

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
                        <Route exact path='/show/:id' component={ViewPost} />
                        <Route exact path='/edit/comment/:post_id/:comment_id' component={EditComment} />
                        <Route exact path='/edit/post/:id' component={EditPost} />
                        <Route exact path='/new' component={CreatePost} />
                        <Route exact path='/profile/:id' component={Profile} />
                        <Route exact path='/notifications' component={Notifications} />
                        <Route path='/*' component={PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
