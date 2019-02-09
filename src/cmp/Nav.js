import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions';
class Nav extends React.Component {
    
    render() {
        
        if (!this.props.authenticated) {
            return (
                <nav className = 'nav'>
                    <div className = 'nav__container'>
                        <h3 className = 'nav__title'>S | A</h3>
                        <div className = 'nav__links'>
                            <NavLink to = '/login' className = 'nav__link'>Log In</NavLink>
                            <NavLink to = '/register' className = 'nav__link'>Register</NavLink>
                        </div>
                    </div>
                </nav>    
            )
        }
         
        if (this.props.user !== null) {
            console.log(this.props.user)
            return (
                <nav className = 'nav'>
                    <div className = 'nav__container'>
                        <h3 className = 'nav__title'>S | A</h3>
                        <div className = 'nav__links'>
                            <img class = 'nav__avatar' src = { `https://api.adorable.io/avatars/130/${this.props.user.first_name} ${this.props.user.last_name}.png`} />
                            <p class = 'nav__avatar__name m-b-2'>{this.props.user.first_name}</p>
                            <NavLink to = '/home' className = 'nav__link'><i class="fas fa-home"></i></NavLink>
                            <NavLink to = '/user' className = 'nav__link'><i class="fas fa-user"></i></NavLink>
                            <NavLink to = '/notifications' className = 'nav__link'><i class="fas fa-bell"></i></NavLink>
                            <NavLink to = '/contacts' className = 'nav__link'><i class="fas fa-address-book"></i></NavLink>
                            <a onClick = {() => {this.props.logout()}} className = 'nav__link'><i class="fas fa-sign-out-alt"></i></a>
                        </div>
                    </div>
                </nav>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, {logout})(Nav);