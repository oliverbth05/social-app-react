import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default (Child) => {

    class IsAuthenticated extends React.Component {

        componentDidMount() {
            if (!this.props.authenticated) {
                this.props.history.push('/login')
            }
        }

        componentDidUpdate() {
            if (!this.props.authenticated) {
                this.props.history.push('/login')
            }
        }

        render() {
            return <Child {...this.props} />
        }
    }

    IsAuthenticated.propTypes = {
        authenticated: PropTypes.bool,
        history: PropTypes.object
    }

    const mapStateToProps = state => {
        return {
            authenticated: state.auth.authenticated
        }
    }

    return connect(mapStateToProps)(IsAuthenticated)
}

