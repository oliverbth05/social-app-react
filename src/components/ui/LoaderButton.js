import React from 'react';
import Loader from './Loader';

const LoaderButton = (props) => {

    if (props.loading) {
        return (
            <button type = 'submit' className = 'btn btn-block btn-primary'><div className='loader-button'></div></button>
        )
    }

    if (!props.onClick) { //If no click handler is added, the button gets type = 'submit'
        return (
            <button type = 'submit' className = 'btn btn-block btn-primary'>{props.children}</button>
        )
    }

    else {
        return (
            <button onClick = {() => {props.onClick()}}type = 'submit' className = 'btn btn-block btn-primary'>{props.children}</button>
        )
    }
}

export default LoaderButton;
