import React from 'react';

class ReplyForm extends React.Component {

    componentDidMount() {
        document.getElementById('reply-input').focus();
    }

    state = {
        reply: ''
    }

    render() {
        return (
            <form className = 'm-t-1 m-b-3'>
                <input id = 'reply-input' className = 'input-block m-b-s' />
                <button type = 'submit' className = 'btn btn-primary btn-small m-r-s'>Reply</button>
                <button className = 'btn btn-secondary btn-small' onClick = {this.props.cancel}>Cancel</button>
            </form>
        )
    }
}

export default ReplyForm;
