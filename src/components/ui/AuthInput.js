import React from 'react';

const AuthInput = props => {
    if (props.error) {
        console.log(props.error)
    }

    return (
        <div className = {props.error ? 'auth-input auth-input-error' : 'auth-input'}>
            <input {...props} placeholder = {props.placeholder} />
            <div className = {props.error ? 'auth-input__icon bg-secondary' : 'auth-input__icon bg-primary'}>
                <i className = {`${props.icon} color-white`} />
            </div>
        </div>
    )
}

export default AuthInput
