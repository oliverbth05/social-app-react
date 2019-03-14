const initialState = {
    comment : null
}

const edit_comment = (state = initialState, action) => {
    
    switch ( action.type ) {
        case 'FETCH_COMMENT' :
            return {
                ...state,
                comment: action.payload
            }
            
        case 'RESET_COMMENT' :
            return {
                ...state,
                comment: null
            }
    
        default :
            return state
    }
    
}

export default edit_comment;