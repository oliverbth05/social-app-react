const initialState = {
    
    new_loading: false,
    profile_loading: false,
    profile_posts_loading: false,
    edit_comment_loading: false,
    edit_post_loading: false,
    search_loading: false,
    subscribe_loading: false
}

const loading = (state = initialState, action) => {
    switch (action.type) {

        

        case 'NEW_LOADING' :
            return {
                ...state,
                new_loading: true
            }
            
        case '!NEW_LOADING' :
            return {
                ...state,
                new_loading: false
            }
            
        case 'PROFILE_LOADING' :
            return {
                ...state,
                profile_loading: true
            }
            
        case '!PROFILE_LOADING' :
            return {
                ...state,
                profile_loading: false
            }
        case 'PROFILE_POSTS_LOADING' :
            return {
                ...state,
                profile_posts_loading: true
            }
            
        case '!PROFILE_POSTS_LOADING' :
            return {
                ...state,
                profile_posts_loading: false
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
            
        case 'EDIT_COMMENT_LOADING' :
            return {
                ...state,
                edit_comment_loading: true 
            }
        
        case '!EDIT_COMMENT_LOADING' :
            return {
                ...state,
                edit_comment_loading: false
            }
            
        case 'EDIT_POST_LOADING' :
            return {
                ...state,
                edit_post_loading: true
            }
        
        case '!EDIT_POST_LOADING' :
            return {
                ...state,
                edit_post_loading: false
            }
            
        case 'SEARCH_LOADING' :
            return {
                ...state,
                search_loading: true
            }
            
        case '!SEARCH_LOADING' :
            return {
                ...state,
                search_loading: false
            }

        default:
            return state
    }
}

export default loading;