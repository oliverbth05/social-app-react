import React from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, resetToken } from '../../authStore/actions';

class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            drawer: false,
        }
        this.showDrawer = this.showDrawer.bind(this)
        this.hideDrawer = this.hideDrawer.bind(this)
        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    showDrawer() {
        this.setState({
            drawer: true
        })
    }

    hideDrawer() {
        this.setState({
            drawer: false
        })
    }

    toggleDrawer() {
        this.setState({
            drawer: !this.state.drawer
        })
    }

    logoutHandler() {
        if (this.state.drawer) {
            this.toggleDrawer();
        }
        this.props.logout();
    }

    render() {

        if (!this.props.authenticated) {
            return (
                <div>
                    <nav className='nav' id='nav'>
                        <div className='nav__links'>
                            <h2 className='logo color-white m-b-3'>Rag</h2>
                            <NavLink exact to='/login' className='nav__link'>Log In</NavLink>
                            <NavLink exact to='/register' className='nav__link'>Register</NavLink>
                        </div>
                    </nav>

                    <i onClick={this.toggleDrawer} className="fas fa-bars mobile-nav__btn"></i>

                    <nav className={this.state.drawer ? 'nav__drawer nav__drawer-show' : 'nav__drawer nav__drawer-hide'}>
                    </nav>

                    <nav className='mobile-nav'>
                        <h2 className='color-white font-light logo'>Rag</h2>
                        <i onClick={this.toggleDrawer} className="fas fa-bars mobile-nav__btn"></i>
                    </nav>

                    <nav className={this.state.drawer ? 'nav__drawer nav__drawer-show' : 'nav__drawer nav__drawer-hide'}>
                        <h3 className='color-primary font-light text-center p-b-1 p-t-1'>Menu</h3>
                        <NavLink onClick={this.toggleDrawer} activeClassName='mobile-nav__link-active' exact to='/' className='mobile-nav__link'>Welcome</NavLink>
                        <NavLink onClick={this.toggleDrawer} activeClassName='mobile-nav__link-active' exact to='/login' className='mobile-nav__link'>Log In</NavLink>
                        <NavLink onClick={this.toggleDrawer} activeClassName='mobile-nav__link-active' exact to='/register' className='mobile-nav__link'>Register</NavLink>
                    </nav>

                    {this.state.drawer ?
                        <div onClick={this.hideDrawer} className='nav__drawer__backdrop'></div>
                        : null}
                </div>
            )
        }

        if (this.props.user !== null) {
            return (
                <div>
                    <nav className='nav'>

                        <div className='nav__links'>

                            <h2 className='logo color-white m-b-3'>Rag</h2>

                            {/* <button onClick = { () => {this.props.resetToken()}} className = 'btn btn-secondary'>Reset Token</button> */}

                            <NavLink exact to='/home' className='nav__link' >
                                <i className="fas fa-home"></i>
                                <span className='nav__link__tooltip'>Home</span>
                            </NavLink>

                            <NavLink exact to='/new' className='nav__link'>
                                <i class="fas fa-edit"></i>
                                <span className='nav__link__tooltip'>Write</span>
                            </NavLink>

                            <NavLink exact to={`/profile/${this.props.user._id}`} className='nav__link' >
                                <i className="fas fa-user"></i>
                                <span className='nav__link__tooltip'>Profile</span>
                            </NavLink>

                            <NavLink exact to='/notifications' className='nav__link' >
                                <i className="fas fa-bell"></i>
                                <span className='nav__link__tooltip'>Notifications</span>
                            </NavLink>

                            <a onClick={this.logoutHandler.bind(this)} className='nav__link'>
                                <i className="fas fa-sign-out-alt"></i>
                                <span className='nav__link__tooltip'>Exit</span>
                            </a>

                        </div>
                    </nav>

                    <nav className='mobile-nav'>
                        <Link to = '/home'><h2 className='color-white font-light logo'>Rag</h2></Link>
                        <i onClick={this.toggleDrawer} className="fas fa-bars mobile-nav__btn"></i>
                    </nav>

                    <nav className={this.state.drawer ? 'nav__drawer nav__drawer-show' : 'nav__drawer nav__drawer-hide'}>
                        <h3 className='color-primary font-light text-center p-b-1 p-t-1'>Menu</h3>
                        <NavLink onClick={this.toggleDrawer} activeClassName='mobile-nav__link-active' className='mobile-nav__link' exact to='/home'>Home</NavLink>
                        <NavLink onClick={this.toggleDrawer} activeClassName='mobile-nav__link-active' className='mobile-nav__link' exact to='/new'>Create</NavLink>
                        <NavLink onClick={this.toggleDrawer} activeClassName='mobile-nav__link-active' className='mobile-nav__link' exact to={`/profile/${this.props.user._id}`}>Profile</NavLink>
                        <NavLink onClick={this.toggleDrawer} activeClassName='mobile-nav__link-active' className='mobile-nav__link' exact to='/notifications'>Notifications</NavLink>
                        <a className='mobile-nav__link' onClick={this.logoutHandler.bind(this)}>Logout</a>
                    </nav>

                    {this.state.drawer ?
                        <div onClick={this.hideDrawer} className='nav__drawer__backdrop'></div>
                        : null}

                </div>
            )
        }
        else {
            return null
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.userData,
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps, { logout, resetToken }, null, { pure: false })(withRouter(Nav));
