import React from 'react';

const Loader = (props) => {
    
    if (props.fullscreen) {
         return (
            <div className = 'container-flex-center'>
                <i className="fas fa-spinner loader"></i>
            </div>
        )
    }
    
    if (props.center) {
        return (
            <div className = 'p-a-3'>
                
            </div>
        )
    }
    
    return <i className="fas fa-spinner loader"></i>
   
}

export default Loader;