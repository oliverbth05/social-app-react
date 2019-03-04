import React from 'react';

const Loader = (props) => {

    if (props.fullscreen) {
        return (
            <div className='container-flex-center'>
                <i className="fas fa-spinner loader"></i>
            </div>
        )
    }

    if (props.halfscreen) {
        return (
            <div className='half-section-flex-center'>
                <i className="fas fa-spinner loader"></i>
            </div>
        )
    }

    if (props.small) {
        return (
            <div className='small-flex-center'>
                <i className="fas fa-spinner loader"></i>
            </div>
        )
    }

    return <i className="fas fa-spinner loader"></i>

}

export default Loader;