import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import AuthInput from '../../components/ui/AuthInput';
import Loader from '../../components/ui/Loader';
import SubmitButton from '../../components/ui/SubmitButton';

class Login extends React.Component {

    componentDidMount() {
        if (this.props.authenticated) {
            this.props.history.push('/home')
        }
        document.title = 'Rag | Log In'
    }

    componentDidUpdate() {
        if (this.props.authenticated) {
            this.props.history.push('/home')
        }
    }

    renderInput({ input, label, type, meta, placeholder, icon }) {
        console.log(input)
        return (
            <AuthInput {...input} error = {meta.touched && meta.error} type = {type} autoComplete = 'new-password' placeholder = {placeholder} icon = {icon}/>
        )
    }

    submitHandler(formValues) {
        this.props.login(formValues.email, formValues.password)
    }

    render() {

        return (
            <div className='container-flex-center bg-gradient'>
                <div className='container-700'>
                    <form autoComplete='off' onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} className='auth-form'>
                        <h1 className='font-light color-white text-center m-b-1'>Log In</h1>
                        <h4 className= 'font-light color-white text-center m-b-3'>Welcome Back</h4>

                        {this.props.error ? <p className='auth-form__alert'><i className="fas fa-times"></i> {this.props.error}</p> : null}
                        <Field name='email' type='text' label='Email' placeholder = 'Email' icon = 'fas fa-at' component={this.renderInput} />
                        <Field name='password' type='password' label='Password' placeholder = 'Password' icon = 'fas fa-lock' component={this.renderInput} />
                        <div className='auth-form__divider'>
                            <SubmitButton loading = {this.props.loading}>Log In</SubmitButton>
                        </div>
                    </form>
                    <Link to = '/register' className = 'text-center color-white inline'>Create an Account</Link>

                </div>
            </div>
        )
    }
}

const validate = (formValues) => {

    const errors = {

    }

    if (!formValues.email) {
        errors.email = 'You must provide your registered E-mail address.'
    }

    if (!formValues.password) {
        errors.password = 'You must provide your created password.'
    }

    return errors;
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated,
    loading: state.login.loading,
    error: state.login.error,
})

var Connected = connect(mapStateToProps, { login })(Login);

export default reduxForm({ form: 'login', validate })(Connected)
