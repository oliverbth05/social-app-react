import React from 'react';

const Error = (props) => {
    return (
      <div className = 'error'>
        <h2 className = 'text-center p-a-1'><i class="fas fa-exclamation-triangle"></i> Oops</h2>
        <p className = 'text-center'>{props.message || 'Something went wrong.'}</p>
      </div>
    ) 
}

export default Error;