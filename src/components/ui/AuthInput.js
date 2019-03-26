import React from 'react';

const AuthInput = props => (
    <div className={props.error ? 'auth-input auth-input-error' : 'auth-input'}>
        <input {...props} placeholder={props.placeholder} />
        <div className= 'auth-input__icon'>
            <i className={props.error ? `${props.icon} color-secondary` : `${props.icon} color-primary`  } />
        </div>
    </div>
)


export default AuthInput
