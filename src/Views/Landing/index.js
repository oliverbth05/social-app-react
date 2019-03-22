import React from 'react';
import Stats from './cmp/Stats';
import { Link } from 'react-router-dom';
import vid from '../../assets/vid.mp4';
import Loader from '../../components/ui/Loader';

class Landing extends React.Component {

    componentDidMount() {
        document.title = 'Rag | Welcome';
      
    }
    
    canPlay() {
        document.getElementById('video').play();
    }

    render() {

        
        return (
            <div className = 'bg-dark'>
                <Link to = '/about' className = 'color-white landing-link'><i class="fas fa-info-circle"></i></Link>
                <section>
                    <div className = 'vid-overlay'>
                        <div>
                            <h1 className = 'logo color-white text-center m-a-3'>Rag</h1>
                            <Link to = '/login' className = 'btn btn-block btn-secondary color-pulse'>Get Started</Link>
                        </div>
                    </div>
                    
                    <video onCanPlay = {this.canPlay.bind(this)} src = {vid} loop = {true} className = 'vid' id = 'video'></video>
                </section>
            </div> 
            
         
        )
    
    
}

}

export default Landing;

//  <h1 className = 'color-white logo text-center'>Rag</h1>
//                         <Link to = '/login' className = 'btn btn-primary btn-block btn-round m-t-2'>Start Contributing</Link>