import React from 'react';

import IsAuthenticated from '../../components/hoc/IsAuthenticated';
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


export default IsAuthenticated(Home)