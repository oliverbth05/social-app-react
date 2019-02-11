import React from 'react';
import { connect } from 'react-redux';
import { register } from './actions';

import Loader from '../cmp/Loader';

class Register extends React.Component {
    
    state = {
        email: '',
        first_name: '',
        last_name: '',
        confirm_password: '',
        password: ''
    }
    
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
    
    inputHandler(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    
    submitHandler(e) {
        e.preventDefault();
        this.props.register({
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        });

    }
    
    render() {
        
        if (this.props.loading) {
            return <Loader fullscreen /> 
        }
        
        return (
            <div className = 'container-flex-center'>
            
                
            
                <div className = 'container-700'>
                    <form onSubmit = {this.submitHandler.bind(this)} className = 'auth-form'>
                    
                        <h2 className = 'font-normal'>Register</h2>
                        
                        {this.props.error ? <p className = 'auth-form__alert'><i className="fas fa-times"></i> Error Registering</p> : null }

                        <div className = 'auth-form__divider'>
                            <label className = 'auth-form__label'>Email</label>
                            <input onChange = {this.inputHandler.bind(this)} className = 'input-block' type = 'email' name = 'email' />
                        </div>
                        
                        <div className = 'auth-form__divider'>
                            <label className = 'auth-form__label'>First Name</label>
                            <input onChange = {this.inputHandler.bind(this)} className = 'input-block' name = 'first_name' />
                        </div>
                        
                        <div className = 'auth-form__divider'>
                            <label className = 'auth-form__label'>Last Name</label>
                            <input onChange = {this.inputHandler.bind(this)} className = 'input-block' name = 'last_name' />
                        </div>
                        
                        <div className = 'auth-form__divider'>
                            <label className = 'auth-form__label'>Password</label>
                            <input onChange = {this.inputHandler.bind(this)} className = 'input-block' type = 'password' name = 'password' />
                        </div>
                        
                        <div className = 'auth-form__divider'>
                            <label className = 'auth-form__label'>Confirm Password</label>
                            <input onChange = {this.inputHandler.bind(this)} className = 'input-block' type = 'password' name = 'confirm_password' />
                        </div>
                        
                        <div className = 'auth-form__divider'>
                            <button className = 'button-block'>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>    
        )    
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.user.authenticated,
        loading: state.loading.register_loading,
        error: state.error.register_error
    }
}

export default connect(mapStateToProps, {register})(Register);