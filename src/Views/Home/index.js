import React from 'react';

import isAuthenticated from 'components/hoc/isAuthenticated';
import HomeNav from './cmp/HomeNav';
import Feed from './cmp/Feed';

class Home extends React.Component {

    componentDidMount() {
        document.title = 'Home'
    }

    render() {
        return (
            <div className='container nav-offset'>
                <HomeNav />
                <Feed />
            </div>
        )
    }
}


export default isAuthenticated(Home)