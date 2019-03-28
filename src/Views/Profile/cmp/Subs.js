import React from 'react';
import { connect } from 'react-redux';
import { removeSubscription } from '../actions';
import Sub from './Sub';

class Subs extends React.Component {

    renderSubs(subs) {

        if (subs.length === 0) {
            return <p>You don't have any subscriptions</p>
        }

        return subs.map(sub => {
            return <Sub {...sub} removeSub = {this.props.removeSubscription} subscriberId = {this.props.user._id} />
        })
    }

    render() {
        return (
            <div className = 'profile-section' >
                <h4 className = 'profile-section__header'>Subscriptions</h4>

                <div className = 'profile-section__content'>
                    {this.renderSubs(this.props.subs)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.profile.loading,
        subs: state.auth.userData.subscriptions,
        user: state.auth.userData
    }
}

export default connect(mapStateToProps, { removeSubscription })(Subs);
