import React from 'react';
import { connect } from 'react-redux';
import isAuthenticated from '../../hoc/isAuthenticated';
import Loader from '../../cmp/Loader';
import Pin from './Pin';
import { removePin } from '../actions';

class Pins extends React.Component {
    
    renderPins(pins) {
        return pins.map(pin => {
            return <Pin {...pin} removePin = {this.props.removePin.bind(this)} user_id = {this.props.user._id} />
        })
    }
    
    render() {
        
        if (this.props.loading) {
            return <Loader />
        }
        
        return (
            <div>
                <h3 className = 'font-normal m-b-2 m-t-3'>My Pins <span className = 'font-light color-primary'>{this.props.pins.length}</span></h3>
                {this.renderPins(this.props.pins)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pins: state.user.userData.pins,
        user: state.user.userData,
        loading: state.loading.profile_loading
    }
}

export default connect(mapStateToProps, {removePin})(isAuthenticated(Pins));