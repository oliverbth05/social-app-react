import React from 'react';

const Loader = (props) => {

    if (props.fullscreen) {
        return (
            <div className='container-flex-center'>
                <div className = 'loader'></div>
            </div>
        )
    }

    if (props.halfscreen) {
        return (
            <div className='half-section-flex-center'>
                <div className = 'loader'></div>
            </div>
        )
    }

    if (props.small) {
        return (
            <div className='small-flex-center'>
                <div className = 'loader'></div>
            </div>
        )
    }

    return <div className = 'loader'></div>

}

export default Loader;
