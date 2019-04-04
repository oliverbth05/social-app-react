import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className = 'container-flex-center'>
            <div className = 'p-a-3'>
                <h2 className = 'color-secondary font-light' ><i class="fas fa-exclamation-circle"></i> Page Not Found</h2>
                <Link to = '/home' className = 'btn btn-primary btn-block m-t-2'>Home</Link>
            </div>
        </div>
        
    )
    
}

export default PageNotFound;