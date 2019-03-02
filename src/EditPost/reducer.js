const edit_post = (state = null, action) => {
    switch (action.type) {
 
        case 'FETCH_EDIT_POST':
            return action.payload
            
        
        case 'RESET_EDIT_POST':
            return null
        
        default: 
            return state
    }   
}

export default edit_post;