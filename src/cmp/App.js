import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Home from '../Home/Home';
import Show from '../Show/Show';
import New from '../New/New';
import Profile from '../Profile/Profile';

import Nav from './Nav';

class App extends React.Component {

    render() {
        return (
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path = '/login' component = {Login} />
                        <Route exact path = '/register' component = {Register} />
                        <Route exact path = '/home' component = {Home} />
                        <Route exact path = '/show/:id' component = {Show} />
                        <Route exact path = '/new' component = {New} />
                        <Route exact path = '/profile/:id' component = {Profile} />
                    </Switch>
                </div>
        )
    }
}

export default App;