const initialState = {
    profileData: null,
    posts: null ,
    loading: false,
    posts_loading: false,
    subscribe_loading: false,
    error: false,
    posts_error: false
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
        
         case 'PROFILE_LOADING' :
            return {
                ...state,
                loading: true
            }
            
        case '!PROFILE_LOADING' :
            return {
                ...state,
                loading: false
            }
        case 'PROFILE_POSTS_LOADING' :
            return {
                ...state,
                posts_loading: true
            }
            
        case '!PROFILE_POSTS_LOADING' :
            return {
                ...state,
                posts_loading: false
            }
            
        case 'PROFILE_ERROR':
          return {
            ...state,
            error: true
          }
    
        case '!PROFILE_ERROR':
          return {
            ...state,
            error: false
          }
    
        case 'PROFILE_POSTS_ERROR':
          return {
            ...state,
            posts_error: true
          }
    
        case '!PROFILE_POSTS_ERROR':
          return {
            ...state,
            posts_error: false
          }
          
         case 'SUBSCRIBE_LOADING' :
            return {
                ...state,
                subscribe_loading: true
            }
            
        case '!SUBSCRIBE_LOADING' :
            return {
                ...state,
                subscribe_loading: false
            }
        
        default :
            return state
    }
}

export default profile