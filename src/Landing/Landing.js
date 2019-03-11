import React from 'react';
import Stats from './cmp/Stats';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
    
    render() {
        return (
            <div>
                <section className = 'container-landing bg-gradient'>
                    <div className = 'container-700 p-a-1'>
                        <h1 className = 'color-white logo text-center'>Rag</h1>
                        <Link to = '/login' className = 'btn btn-primary btn-block btn-round m-t-2'>Start Contributing</Link>
                    </div>
                </section>

                <section className = 'container-landing'>
                <Stats />
                </section>
            </div> 
        )
    }
    
}

export default Landing;