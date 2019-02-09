const initialState = {
    
    post: null,
    comments: null,

    like_loading: false,
    pin_loading: false,
    
}

const show = (state = null, action) => {
    switch (action.type) {

        
        case 'FETCH_POST':
            return {
                ...state,
                post: action.payload.post,
                comments: action.payload.comments,
            }
            
    
        default: 
            return state
    }   
}

export default show;