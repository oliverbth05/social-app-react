const initialState = {
    postData: null,
    loading: false
}

const editPost = (state = initialState, action) => {
    switch (action.type) {
 
        case 'FETCH_EDIT_POST':
            return {
                ...state,
                postData: action.payload
            }
        
        case 'RESET_EDIT_POST':
            return initialState
            
        case 'EDIT_POST_LOADING' :
            return {
                ...state,
                loading: true
            }
        
        case '!EDIT_POST_LOADING' :
            return {
                ...state,
                loading: false
            }
            
        default: 
            return state
    }   
}

export default editPost;