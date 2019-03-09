const initialState = {
    profileData: null,
    posts: null
}

const profile = (state = initialState, action) => {
    switch(action.type) {
        
        case 'FETCH_PROFILE' :
            return {
                ...state,
                profileData: action.payload
            }
        
        case 'FETCH_PROFILE_POSTS' :
            return {
                ...state,
                posts: action.payload
            }
        
        default :
            return state
    }
}

export default profile