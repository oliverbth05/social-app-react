import React from 'react';
import { connect } from 'react-redux';
import isAuthenticated from '../hoc/isAuthenticated';
import Loader from '../cmp/Loader';
import moment from 'moment';
import { fetchUserProfile, addSubscription, fetchUserProfilePosts, removeSubscription } from './actions';
import Pins from './cmp/Pins';
import Subs from './cmp/Subs';
import ProfilePosts from './cmp/ProfilePosts';
import SubButton from './cmp/SubButton';

class Profile extends React.Component {
    
    componentDidMount() {
        this.props.fetchUserProfile(this.props.match.params.id)
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchUserProfile(this.props.match.params.id)
        }
    }
    
    isUser() {
        if (this.props.profile._id === this.props.user._id) {
            return true
        }
        else {
            return false
        }
    }
    
    isSubscribed() {
        var user_id = this.props.user._id;
        var creator_id = this.props.profile._id;
        var subs = this.props.user.subscriptions.map(item => {
            return item.creator_id
        })
        
        if (subs.indexOf(creator_id) === -1) {
            return false
        }
        
        else {
            return true
        }
    }
    
    removeSub() {
        var data = {
            subscriber_id: this.props.user._id ,
            creator_id: this.props.profile._id
        }
        
        this.props.removeSubscription(data)
    }
    
    addSub() {
        var data = {
            creator_id: this.props.profile._id,
            creator_name: `${this.props.profile.first_name} ${this.props.profile.last_name}`,
            user_id: this.props.user._id,
            subscriber_id: this.props.user._id,
            subscriber_name: `${this.props.user.first_name} ${this.props.user.last_name}`
        }
        
        this.props.addSubscription(data)
    }
    
    render() {
        
        if (this.props.profile_loading || this.props.profile === null) {
            return <Loader fullscreen />
        }
        
        return (
            <div className = 'container'>
            
                <div className = 'p-a-1 box bg-primary'>
                    <img alt = 'user avatar' className='avatar m-auto m-b-1' src={`https://api.adorable.io/avatars/130/${this.props.profile.first_name} ${this.props.profile.last_name}.png`} />
                    <h2 className = 'font-light text-center color-white m-b-1'>{`${this.props.profile.first_name} ${this.props.profile.last_name}`}</h2>
                    <p className = 'text-center color-white'>Subscribers: {this.props.profile.subscribers.length}</p>
                    <p className = 'text-center color-white'>Joined {new moment(this.props.profile.join_date).fromNow()}</p>
                   
                </div>
                
             
                <div className = 'container-700-res'>
                    
                    {!this.isUser() ?
                    <div className = 'm-t-1'>
                        <SubButton loading = {this.props.subscribe_loading} disabled = {this.isSubscribed()} addSub = {this.addSub.bind(this)} removeSub = {this.removeSub.bind(this)} />
                    </div>
                    : null }
                    
                    <div className = 'box m-t-2'>
                        <h3 className = 'font-normal text-center'>Summary</h3>
                        <p className = 'p-b-1 text-center'>{this.props.profile.summary}</p>
                    </div>
                    
                    { this.isUser() ?
                    <div className = 'm-t-2'>
                        <Pins />
                        <Subs />
                    </div>
                    : null }
                    
                    <ProfilePosts user_id = {this.props.profile._id}/>
                </div>

            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        profile_loading: state.loading.profile_loading,
        user: state.user.userData,
        profile: state.profile.profileData,
        subscribe_loading: state.loading.subscribe_loading
    }
}

export default connect(mapStateToProps, {fetchUserProfile, addSubscription, fetchUserProfilePosts, removeSubscription})(isAuthenticated(Profile))


//   {!this.isUser() ? 
//                     <div className = 'm-t-1'>
//                         {this.isSubscribed() ?
//                         <button className = 'btn btn-secondary btn-round btn-block'><i class="fas fa-check-circle"></i> Subscribed</button>
//                         :
//                         <button onClick = {this.addSub.bind(this)} className = 'btn btn-secondary btn-round btn-block'>Subscribe</button>
//                         }
//                     </div>
//                     : null }