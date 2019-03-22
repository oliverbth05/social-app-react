const initialState = {
    loading: false
}

const createPost = (state = initialState, action) => {
    switch(action.type) {
        
        
        case 'CREATE_POST_LOADING' :
            return {
                ...state,
                loading: true
            }
            
        case '!CREATE_POST_LOADING' :
            return {
                ...state,
                loading: false
            }
        
        default :
            return state
    }
}

export default createPost;