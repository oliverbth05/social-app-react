import React from 'react';

const PostError = (props) => {
    return (
        <div className = 'half-section-flex-center'>
            <div>
                <h2 className = 'font-normal text-center'><i class="fas fa-exclamation-triangle"></i> Error Fetching Post</h2>
                <h3 className = 'p-t-1 color-secondary font-normal text-center'>{props.error}</h3>
            </div>
            
        </div>
    )
    
}

export default PostError;