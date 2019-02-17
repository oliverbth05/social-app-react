const profile = (state = null, action) => {
    switch(action.type) {
        
        case 'FETCH_PROFILE' :
            return action.payload
        
        default :
            return state
    }
}

export default profile