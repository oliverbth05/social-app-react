import React from 'react';
import Loader from './Loader';

const LoaderButton = (props) => {

    if (props.loading) {
        return (
            <button type = 'submit' className = 'btn btn-block btn-primary'><div className='loader-button'></div></button>
        )
    }

    else {
        return (
            <button type = 'submit' className = 'btn btn-block btn-primary'>Submit</button>
        )
    }


}

export default LoaderButton;
