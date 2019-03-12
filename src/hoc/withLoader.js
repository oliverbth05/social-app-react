import React from 'react';
import Loader from '../cmp/Loader';

export default (Child) => {
    class withLoader extends React.Component {
        render() {
            if (this.props.error) {
                return <p>Error</p>
            }
            
            else if (this.props.loading) {
                return <Loader />
            }
            
            else {
                return <Child {...this.props } />
            }
        }
    }
}