import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
const Pin = (props) => {

    return (
        <div className = 'pin'>
            <p>{props.post_title}</p>
            <p className = 'font-light color-primary m-b-1'>Pinned on {new moment(props.pin_date).format('MM/DD/YYYY')}</p>
            <Link to = {`/show/${props.post_id}`} className = 'button m-r-s'>Visit</Link>
            <button className = 'button' onClick = { () => {props.removePin({post_id: props.post_id, user_id: props.user_id})}}>Remove</button>
        </div>
    )
}

export default Pin;