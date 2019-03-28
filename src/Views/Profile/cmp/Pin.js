import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
const Pin = (props) => {

    return (
        <div className = 'pin'>
            <p>{props.post.title}</p>
            <p className = 'font-light color-primary m-b-1'>Pinned on {new moment(props.pinDate).format('MM/DD/YYYY')}</p>
            <Link to = {`/show/${props.post._id}`} className = 'btn btn-primary btn-round m-r-s'>Go</Link>
            <button className = 'btn btn-secondary btn-round' onClick = { () => {props.removePin({post: {_id: props.post._id}, userId: props.userId})}}>Remove</button>
        </div>
    )
}

export default Pin;
