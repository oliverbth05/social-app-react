import React from 'react';

const ActionButton = (props) => { 
        if (props.loading) {
            return <button className = 'button m-r-s'><div className = 'loader-button'></div></button>
        }
        else if (props.disabled && !props.loading){
            return <span className = 'color-primary'><i className="fas fa-check-circle"></i> {props.disabledText} </span>
            // return <button className = 'button m-r-s'><i className="fas fa-check-circle"></i> {props.disabledText}</button>
        }
        else {
            return <button onClick = {() => {props.onClick()}} className = 'button m-r-s'>{props.children}</button>
        }
}

export default ActionButton;
    //Button that shows a loading state, and a completed state.
    // Has three states 
    //     1. Able to click
    //     2. Loading 
    //     3. Already Clicked (disabled)
    // Props
    //     1. loading | Boolean
    //     2. disabled | Boolean
    //     3. innerText | String
    //     4. disabledText | String
    //     5. onClick function | Function
    