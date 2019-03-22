const initialState = {
    comment : null,
    error: false,
    loading: false,
}

const editComment = (state = initialState, action) => {
    
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
            
        case 'EDIT_COMMENT_ERROR':
          return {
            ...state,
            error: true
          }
    
        case '!EDIT_COMMENT_ERROR':
          return {
            ...state,
            error: false
          }
          
        case 'EDIT_COMMENT_LOADING' :
            return {
                ...state,
                loading: true 
            }
        
        case '!EDIT_COMMENT_LOADING' :
            return {
                ...state,
                loading: false
            }
    
        default :
            return state
    }
    
}

export default editComment;