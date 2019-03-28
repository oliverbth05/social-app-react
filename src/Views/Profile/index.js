import React from 'react';
import { connect } from 'react-redux';
import IsAuthenticated from '../../components/hoc/IsAuthenticated';
import Loader from '../../components/ui/Loader';
import moment from 'moment';
import { fetchUserProfile, addSubscription, fetchUserProfilePosts, removeSubscription } from './actions';
import Pins from './cmp/Pins';
import Subs from './cmp/Subs';
import ProfilePosts from './cmp/ProfilePosts';
import SubButton from './cmp/SubButton';
import ActionButton from '../../components/ui/ActionButton';

import Error from '../../components/ui/Error';

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchUserProfile(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchUserProfile(this.props.match.params.id)
        }
        if (this.props.profile) {
            document.title = this.props.profile.firstName
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
        var userId = this.props.user._id;
        var creatorId = this.props.profile._id;
        var subs = this.props.user.subscriptions.map(item => {
            return item.creator._id
        })

        if (subs.indexOf(creatorId) === -1) {
            return false
        }

        else {
            return true
        }
    }

    removeSub() {
        var data = {
            subscriber_id: this.props.user._id,
            creator_id: this.props.profile._id
        }

        this.props.removeSubscription(data)
    }

    addSub() {
        var data = {
            creator: {
                _id: this.props.profile._id,
                userName: `${this.props.profile.firstName} ${this.props.profile.lastName}`
            },
            subscriber: {
                _id: this.props.user._id,
                userName: `${this.props.user.firstName} ${this.props.user.lastName}`
            }
        }
        this.props.addSubscription(data)
    }

    render() {

        if (this.props.error) {
            return (
                <div className = 'container-flex-center'>
                    <Error message = {'Failed to fetch user profile.'} />
                </div>
            )
        }

        if (this.props.profile_loading || this.props.profile === null) {
            return <Loader fullscreen />
        }

        return (
            <div className = 'container'>
                <div className = 'p-a-1'>
                    <img alt = 'user avatar' className='avatar m-auto m-b-1' src={`https://api.adorable.io/avatars/130/${this.props.profile.firstName} ${this.props.profile.lastName}.png`} />
                    <h2 className = 'font-light text-center m-b-1'>{`${this.props.profile.firstName} ${this.props.profile.lastName}`}</h2>
                    <p className = 'text-center'>Subscribers: {this.props.profile.subscribers.length}</p>
                    <p className = 'text-center'>Joined {new moment(this.props.profile.joinDate).fromNow()}</p>
                </div>

                <div className = 'container-700-res'>

                    {!this.isUser() ?
                    <div className = 'm-t-1'>

                        <ActionButton
                        loading = {this.props.subscribe_loading}
                        array = {this.props.user.subscriptions.map(item => item.creator._id)}
                        item = {this.props.profile._id}
                        onClick = {this.addSub.bind(this)}
                        disabledMessage = 'Subscribed'
                        >
                        Subscribe
                        </ActionButton>

                    </div>
                    : null }

                    { this.isUser() ?
                    <div>
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

const mapStateToProps = state => ({
    profile_loading: state.profile.loading,
    user: state.auth.userData,
    profile: state.profile.profileData,
    subscribe_loading: state.profile.subscribe_loading,
    error: state.profile.error
})

export default connect(mapStateToProps, { fetchUserProfile, addSubscription, fetchUserProfilePosts, removeSubscription })(IsAuthenticated(Profile))
