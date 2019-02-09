import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../views/Login';
import Register from '../views/Register';
import Home from '../views/Home';
import Show from '../views/Show';

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
                    </Switch>
                </div>
        )
    }
}

export default App;