import React from 'react';

const Loader = (props) => {
    
    console.log('Loader loaded')

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
