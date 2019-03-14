import React from 'react';
import server from '../../../api';
import Loader from '../../../components/ui/Loader';

class Stats extends React.Component {
    
    state = {
        comments: null,
        posts: null,
        users: null,
        views: null,
        error: false,
        loading: true
    }
    
    componentDidMount() {
        server.get('stats/')
        .then(res => {
            this.setState({
                ...res.data,
                loading: false
            })
        })
        .catch(err => {
            this.setState({
                error: true
            })
        })
    }
    
    render() {
        return(
            <div className = 'stats'>
                <h3 className = 'font-light text-center'>Statistics</h3>
                
                { this.state.loading ? <div className = 'stats__loader'><i class="fas fa-spinner"></i></div> :
                <div className = 'stats__items'>
                
                    <div className = 'stats__item fade-interval-1'>
                        <h2><i class="fas fa-comments"></i>{this.state.comments}</h2>
                        <p>Comments posted</p>
                    </div>
                            
                    <div className = 'stats__item fade-interval-2'>
                        <h2><i class="fas fa-edit"></i>{this.state.posts}</h2>
                        <p>Posts created</p>
                    </div>
                            
                    <div className = 'stats__item fade-interval-3'>
                        <h2><i class="fas fa-users"></i>{this.state.users}</h2>
                        <p>Registered Users</p>
                    </div>
                    
                </div>
                }
            </div>
        )
    }
}

export default Stats;