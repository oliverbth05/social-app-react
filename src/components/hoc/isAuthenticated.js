import React from 'react';
import { connect } from 'react-redux';

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

    const mapStateToProps = state => {
        return {
            authenticated: state.user.authenticated
        }
    }

    return connect(mapStateToProps)(IsAuthenticated)
}

