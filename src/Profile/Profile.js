import React from 'react';
import { connect } from 'react-redux';
import isAuthenticated from '../hoc/isAuthenticated';
import Loader from '../cmp/Loader';
import { fetchUserProfile } from './actions';
import Pins from './cmp/Pins';

class Profile extends React.Component {
    
    componentDidMount() {
        this.props.fetchUserProfile(this.props.match.params.id)
    }
    
    isUser() {
        if (this.props.profile._id === this.props.user._id) {
            return true
        }
        else {
            return false
        }
    }
    
    render() {
        
        if (this.props.loading || this.props.profile === null) {
            return <Loader fullscreen />
        }
        
        return (
            <div className = 'container-700'>
                <img alt = 'user avatar' className='avatar m-auto m-t-3' src={`https://api.adorable.io/avatars/130/${this.props.profile.first_name} ${this.props.profile.last_name}.png`} />
                <h2 className = 'font-normal m-b-1 m-t-2 p-b-1 text-center border-bottom'>{`${this.props.profile.first_name} ${this.props.profile.last_name}`}</h2>
                <h3 className = 'font-normal'>Summary</h3>
                <p className = 'p-b-1 border-bottom' >{this.props.profile.summary}</p>
                
                {this.props.profile._id !== this.props.user._id ? 
                <div>
                    <button className = 'button m-r-s m-t-1'>Add to Contacts</button>
                    <button className = 'button m-t-1'>Message</button>
                </div>
                : null }
                
                { this.isUser() ? <Pins /> : null }
                
                
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading.profile_loading,
        user: state.user.userData,
        profile: state.profile
    }
}

export default connect(mapStateToProps, {fetchUserProfile})(isAuthenticated(Profile))