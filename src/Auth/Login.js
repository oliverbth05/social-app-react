import React            from 'react';
import { connect }      from 'react-redux';
import { login }        from './actions';

import Loader           from '../cmp/Loader';

class Login extends React.Component {
    
    state = {
        email: '',
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
        this.props.login(this.state.email, this.state.password);
    }
    
    render() {
        
        if (this.props.loading) {
            return <Loader fullscreen /> 
        }
        
        return (
            <div className = 'container-flex-center'>
            
                <div className = 'container-700'>
                    <form onSubmit = {this.submitHandler.bind(this)} className = 'auth-form'>
                    
                        <h2 className = 'font-light text-center m-b-3'>Log In</h2>
                        

                        {this.props.error ? <p className = 'auth-form__alert'><i className="fas fa-times"></i> {this.props.error}</p> : null }

                        <div className = 'auth-form__divider'>
                            <label className = 'auth-form__label'>Email</label>
                            <input onChange = {this.inputHandler.bind(this)} className = 'input-block' type = 'email' name = 'email' />
                        </div>
                        
                        <div className = 'auth-form__divider'>
                            <label className = 'auth-form__label'>Password</label>
                            <input onChange = {this.inputHandler.bind(this)} className = 'input-block' type = 'password' name = 'password' />
                        </div>
                        
                        <div className = 'auth-form__divider'>
                            <button className = 'btn btn-primary btn-block'>Submit</button>
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
        loading: state.loading.login_loading,
        error: state.error.login_error
    }
}

export default connect(mapStateToProps, {login})(Login);