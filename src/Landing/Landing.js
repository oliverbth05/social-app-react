import React from 'react';
import Stats from './cmp/Stats';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
    
    render() {
        return (
            <div className = 'container-landing bg-gradient'>
            <div className = 'container-700'>
                <h1 className = 'color-white font-light text-center m-b-2'>Application Landing</h1>
                <Link to = '/login' className = 'btn btn-primary btn-block'>Get Started</Link>
                <Stats />
            </div>
            </div>
        )
    }
    
}

export default Landing;