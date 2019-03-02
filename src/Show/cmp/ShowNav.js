import React from 'react';

const ShowNav = (props) => {
    return (
        <div className = 'show-nav'>
            <button onClick = {() => {props.history.goBack()}} className = 'btn btn-primary m-l-2'><i class="fas fa-chevron-left"></i> Go Back</button>
            <button className = 'btn btn-primary m-l-1' onClick = {() => {document.getElementById('comments').scrollIntoView()}} ><i class="fas fa-chevron-down"></i> Go to Bottom</button>
        </div>
    )
}

export default ShowNav;