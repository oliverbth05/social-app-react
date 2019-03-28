import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = (props) => { //Used for like/pin buttons, checking for presence of el in array.
    let disabled;
    if (props.array.includes(props.item)) {
        disabled = true;
    }
    if (props.loading) {
        return <button className='btn btn-primary btn-small m-r-s'><div className='loader-button'></div></button>
    }
    if (disabled) {
        return <span className='color-primary font-small m-r-s'><i className="fas fa-check-circle"></i> {props.disabledMessage}</span>
    }
    return <button onClick={() => {props.onClick()}} className='btn btn-primary btn-small m-r-s'>{props.children}</button>
}

ActionButton.propTypes = {
    loading: PropTypes.bool,
    array: PropTypes.array,
    item: PropTypes.string,
    onClick: PropTypes.func,
    disabledMessage: PropTypes.string
}

ActionButton.defaultProps = {
    loading: false,
    disabled: false
}

export default ActionButton;
