const comments = (state = null, action) => {
    switch (action.type) {

        case 'FETCH_COMMENTS':
            return action.payload
            
        case 'POST_COMMENT':
            return state.concat(action.payload)
            
        default: 
            return state
    }   
}

export default comments;