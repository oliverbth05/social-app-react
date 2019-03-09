const initialState = {
    login_loading: false,
    register_loading: false,
    posts_loading: false,
    post_loading: false,
    like_loading: false,
    pin_loading: false,
    comments_loading: false,
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
        case 'LOGIN_LOADING':
            return {
                ...state,
                login_loading: true
            }

        case '!LOGIN_LOADING':
            return {
                ...state,
                login_loading: false
            }

        case 'REGISTER_LOADING':
            return {
                ...state,
                register_loading: true
            }

        case '!REGISTER_LOADING':
            return {
                ...state,
                register_loading: false
            }

        case 'POSTS_LOADING':
            return {
                ...state,
                posts_loading: true
            }

        case '!POSTS_LOADING':
            return {
                ...state,
                posts_loading: false
            }


        case 'MORE_POSTS_LOADING' :
            return {
                ...state,
                more_posts_loading: true
            }
            
        case '!MORE_POSTS_LOADING' :
            return {
                ...state,
                more_posts_loading: false
            }

        case 'POST_LOADING':
            return {
                ...state,
                post_loading: true
            }

        case '!POST_LOADING':
            return {
                ...state,
                post_loading: false
            }

        case 'LIKE_LOADING':
            return {
                ...state,
                like_loading: true
            }

        case '!LIKE_LOADING':
            return {
                ...state,
                like_loading: false
            }

        case 'PIN_LOADING':
            return {
                ...state,
                pin_loading: true
            }

        case '!PIN_LOADING':
            return {
                ...state,
                pin_loading: false
            }
            
        case 'COMMENTS_LOADING':
            return {
                ...state,
                comments_loading: true
            }

        case '!COMMENTS_LOADING':
            return {
                ...state,
                comments_loading: false
            }
            
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