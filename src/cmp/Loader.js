import React from 'react';

const Loader = (props) => {
    
    if (props.fullscreen) {
         return (
            <div className = 'container-flex-center'>
                <i className="fas fa-spinner loader"></i>
            </div>
        )
    }
    
    return <i class="fas fa-spinner loader"></i>
   
}

export default Loader;