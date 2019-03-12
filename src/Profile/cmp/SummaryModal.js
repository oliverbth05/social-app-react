import React from 'react';
import ReactDOM from 'react-dom';

const SummaryModal = (props) => {
    return ReactDOM.createPortal(
    <div onClick = {() => {props.toggle()}} className = 'modal modal-fade-1'>
        <div onClick = {(e) => {e.stopPropagation()}} className = 'modal-container modal-fade-2'>
                <form className = 'summary-form'>
                    <label>Summary</label>
                    <textarea className = 'textarea-large m-b-s'></textarea>
                    <button className = 'btn btn-block btn-primary '>Update</button>
                </form>
        </div>
    </div>, document.querySelector('#modal')
    )
}

export default SummaryModal;