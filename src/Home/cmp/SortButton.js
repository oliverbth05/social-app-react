import React from 'react';

class SortButton extends React.Component {
    
    state = {
        dropdown: false
    }
    
    toggleDropDown() {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }
    
    render() {
        return (
            <div className = 'sort-button__container m-b-2'>
                <button className = 'sort-button' onClick = {this.toggleDropDown.bind(this)}>
                <span>{this.props.sortType}</span>
                <i class="fas fa-caret-down"></i>
                </button>
                
                
                <ul className = {this.state.dropdown ? 'sort-button__options sort-button__options-show' : 'sort-button__options sort-button__options-hide'}>
                   <li>Today</li>
                   <li>This Month </li>
                   <li>All Time</li>
                </ul>
         
            </div>
            )
      
    }
}

export default SortButton;