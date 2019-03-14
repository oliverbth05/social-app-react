import React from 'react';
import ReactDOM from 'react-dom';

const ActionModal = (props) => {
    return ReactDOM.createPortal(

        <div onClick={() => { props.toggle() }} className='modal modal-fade-1'>
            <div onClick={(e) => { e.stopPropagation() }} className='modal-container modal-fade-2'>
                <h3 className='font-normal text-center m-b-1'>{props.title}</h3>
                <p className='m-b-2'>{props.content}</p>
                <button onClick={() => { props.action() }} className='btn btn-secondary'>{props.actionType}</button>
                <button onClick={() => { props.toggle() }} className='btn btn-primary m-l-1'>Cancel</button>
            </div>
        </div>, document.querySelector('#modal')
    )
}

export default ActionModal;

/* Component Props
    action: The function that gets executed upon confirmation eg Delete, update
    actionType: The name of the action that the button will convey
    toggle: A function for hiding/showing the modal, based on the state of the parent component
    title: The title for the modal, usually describing the action
    content: The body of the modal, usually a confirmation sentence
*/