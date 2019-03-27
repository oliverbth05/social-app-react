import React from 'react';

const ActionButton = (props) => {

    console.log(props.array.includes(props.item))

    let disabled;

    if (props.array.includes(props.item)) {
        disabled = true;
    }

    if (props.loading) {
        return <button className='btn btn-primary btn-small m-r-s'><div className='loader-button'></div></button>
    }

    else if (disabled) {
        return <span className='color-primary font-small m-r-s'><i className="fas fa-check-circle"></i> {props.disabledMessage}</span>
    }

    else {
        return <button
                onClick={() => {props.onClick()}}
                className='btn btn-primary btn-small m-r-s'>
                {props.children}
                </button>
    }

}

export default ActionButton;
