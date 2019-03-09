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
            return <Sub {...sub} removeSub = {this.props.removeSubscription} subscriber_id = {this.props.user._id} />
        })
    } 
    
    render() {
        return (
            <div>
                <div className = 'border-header m-t-3 m-b-1'>
                    <span className = 'border-header__border'></span>
                    <h3 className = 'font-normal'>My Subscriptions <span className = 'font-light color-primary'>{this.props.subs.length}</span></h3>
                    <span className = 'border-header__border'></span>
                </div>
                {this.renderSubs(this.props.subs)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading.profile_loading,
        subs: state.user.userData.subscriptions,
        user: state.user.userData
    }
}

export default connect(mapStateToProps, {removeSubscription})(Subs);