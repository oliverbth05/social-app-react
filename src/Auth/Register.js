import React from 'react';
import { connect } from 'react-redux';
import { register } from './actions';
import { Field, reduxForm } from 'redux-form';

import Loader from '../cmp/Loader';

class Register extends React.Component {

    componentDidMount() {
        if (this.props.authenticated) {
            this.props.history.push('/home')
        }
    }

    componentDidUpdate() {
        if (this.props.authenticated) {
            this.props.history.push('/home')
        }
    }

    renderInput({ input, type, meta, label }) {
        return (
            <div className='auth-form__divider'>
                <label className='auth-form__label'>
                    {label}
                    {meta.touched ?
                        <span className='m-l-1 font-light font-small color-secondary'>{meta.error}</span>
                        : null}
                </label>
                <input className='input-block' {...input} type={type}></input>
            </div>
        )
    }

    submitHandler(formValues) {
        this.props.register({
            email: formValues.email,
            password: formValues.password,
            first_name: formValues.first_name,
            last_name: formValues.last_name
        });
    }

    render() {

        if (this.props.loading) {
            return <Loader fullscreen />
        }

        return (
            <div className='container-flex-center'>
                <div className='container-700'>

                    <form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} className='auth-form'>
                        <h2 className='font-light text-center m-b-3'>Register</h2>
                        {this.props.error ? <p className='auth-form__alert'><i className="fas fa-times"></i> {this.props.error}</p> : null}
                        <Field component={this.renderInput} name='email' type='text' label='Email Address' />
                        <Field component={this.renderInput} name='first_name' type='text' label='First Name' />
                        <Field component={this.renderInput} name='last_name' type='text' label='Last Name' />
                        <Field component={this.renderInput} name='password' type='password' label='Password' />
                        <Field component={this.renderInput} name='confirm_password' type='password' label='Confirm Password' />
                        <div className='auth-form__divider'>
                            <button className='btn btn-primary btn-block'>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {

    }

    if (!formValues.email || !formValues.email.includes('@')) {
        errors.email = 'Please provide a valid email address'
    }

    if (!formValues.first_name) {
        errors.first_name = 'Please provide your first name'
    }

    if (!formValues.last_name) {
        errors.last_name = 'Please provide your last name'
    }

    if (!formValues.password || formValues.password.length < 7) {
        errors.password = 'Please create a password with at least 7 characters'
    }

    if (formValues.confirm_password !== formValues.password) {
        errors.confirm_password = 'Passwords must match'
    }

    return errors
}

const mapStateToProps = state => {
    return {
        authenticated: state.user.authenticated,
        loading: state.loading.register_loading,
        error: state.error.register_error
    }
}

const Connected = connect(mapStateToProps, { register })(Register);

export default reduxForm({
    form: 'Register',
    validate
})(Connected);