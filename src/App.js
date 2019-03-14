import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Landing from './Views/Landing/Landing';
import Login from './Views/Login/Login';
import Register from './Views/Register/Register';
import Home from './Views/Home';
import Show from './Views/Show/Show';
import New from './Views/New/New';
import Profile from './Views/Profile/Profile';
import EditComment from './Views/EditComment';
import EditPost from './Views/EditPost';
import Search from './Views/Search/Search';
import Nav from 'components/ui/Nav';
import PageNotFound from 'components/ui/PageNotFound';

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
                        <Route path='/*' component={PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;