import React from 'react';
import { connect } from 'react-redux';

import Loader from '../../../components/ui/Loader';
import Pin from './Pin';
import { removePin } from '../actions';

class Pins extends React.Component {

    renderPins(pins) {
        if (pins.length === 0) {
            return <p>You don't have any pins</p>
        }
        return pins.map(pin => {
            return <Pin {...pin} removePin = {this.props.removePin.bind(this)} user_id = {this.props.user._id} />
        })
    }

    render() {

        if (this.props.loading) {
            return <Loader />
        }
        return (
            <div className = 'profile-section'>

                <h4 className = 'profile-section__header'>Pins</h4>

                <div className = 'profile-section__content'>
                    {this.renderPins(this.props.pins)}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    pins: state.auth.userData.pins,
    user: state.auth.userData,
    loading: state.profile.loading
})

export default connect(mapStateToProps, { removePin })(Pins);
