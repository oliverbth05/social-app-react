import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../Auth/actions';

class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            drawer: false
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


    componentDidMount() {

    }

    render() {

        if (!this.props.authenticated) {
            return (
                <div>
                    <nav className='nav'>
                        <div className='nav__container'>
                            <h3 className='nav__title'>S | A</h3>
                            <div className='nav__links'>
                                <NavLink exact to='/login' className='nav__link'>Log In</NavLink>
                                <NavLink exact to='/register' className='nav__link'>Register</NavLink>
                            </div>
                        </div>
                    </nav>

                    <i onClick={this.toggleDrawer} className="fas fa-bars nav__mobile-btn"></i>
                    
                    <nav className={this.state.drawer ? 'nav__drawer nav__drawer-show' : 'nav__drawer nav__drawer-hide'}>
                    </nav>

                    <div onClick={this.hideDrawer} className={this.state.drawer ? 'nav__drawer__backdrop nav__drawer__backdrop-show' : 'nav__drawer__backdrop nav__drawer__backdrop-hide'}></div>

                </div>
            )
        }

        if (this.props.user !== null) {
            return (
                <div>
                    <nav className='nav'>
                        
                            <div className='nav__links'>
                                <NavLink exact to='/home' className='nav__link' ><i className="fas fa-home"></i></NavLink>
                                <NavLink exact to= {`/profile/${this.props.user._id}`} className='nav__link' ><i className="fas fa-user"></i></NavLink>
                                <NavLink exact to='/notifications' className='nav__link' ><i className="fas fa-bell"></i></NavLink>
                                <NavLink exact to='/contacts' className='nav__link' ><i className="fas fa-address-book"></i></NavLink>
                                
                                <a onClick={() => { this.props.logout() }} className='nav__link'><i className="fas fa-sign-out-alt"></i></a>
                               
                            </div>
                 

                    </nav>

                    <i onClick={this.toggleDrawer} className="fas fa-bars nav__mobile-btn"></i>

                    <nav className={this.state.drawer ? 'nav__drawer nav__drawer-show' : 'nav__drawer nav__drawer-hide'}>
                    
                    </nav>
                    
                    <div onClick={this.hideDrawer} className={this.state.drawer ? 'nav__drawer__backdrop nav__drawer__backdrop-show' : 'nav__drawer__backdrop nav__drawer__backdrop-hide'}></div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.userData,
        authenticated: state.user.authenticated
    }
}

export default connect(mapStateToProps, { logout }, null, {pure: false})(withRouter(Nav));