import React from 'react';

const Alert = props => 
    
        <p className = {`alert alert-${props.type}` || 'alert alert-default'}>
            {props.children}
        </p>
    
export default Alert;