import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';
import { Field, reduxForm } from 'redux-form';

import Loader from 'components/ui/Loader';

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

    renderInput({ input, label, type, meta }) {
        return (
            <div className='auth-form__divider'>
                <label className='auth-form__label'>
                    {label}
                    {meta.touched ?
                        <span className='m-l-1 font-light font-small color-secondary'>{meta.error}</span>
                        : null}
                </label>
                <input className='input-block' type={type} autoComplete='new-password' {...input} />
            </div>
        )
    }

    submitHandler(formValues) {
        this.props.login(formValues.email, formValues.password)
    }

    render() {

        if (this.props.loading) {
            return <Loader fullscreen />
        }

        return (
            <div className='container-flex-center'>
                <div className='container-700'>
                    <form autoComplete='off' onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} className='auth-form'>
                        <h2 className='font-light text-center m-b-3'>Log In</h2>
                        {this.props.error ? <p className='auth-form__alert'><i className="fas fa-times"></i> {this.props.error}</p> : null}
                        <Field name='email' type='text' label='Email' component={this.renderInput} />
                        <Field name='password' type='password' label='Password' component={this.renderInput} />
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

    if (!formValues.email) {
        errors.email = 'You must provide your registered E-mail address.'
    }

    if (!formValues.password) {
        errors.password = 'You must provide your created password.'
    }

    return errors;
}

const mapStateToProps = state => {
    return {
        authenticated: state.user.authenticated,
        loading: state.login.loading,
        error: state.login.error,
    }
}

var Connected = connect(mapStateToProps, { login })(Login);

export default reduxForm({
    form: 'login',
    validate
})(Connected)