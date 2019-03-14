const initialState = {
  token_error: false,
  edit_comment_error: false,
  profile_error: false,
  profile_posts_error: false
}

const error = (state = initialState, action) => {
  switch (action.type) {

    case 'TOKEN_ERROR':
      return {
        ...state,
        token_errror: true
      }

    case '!TOKEN_ERROR':
      return {
        ...state,
        token_error: false
      }

   

    

    

    

    

    case 'EDIT_COMMENT_ERROR':
      return {
        ...state,
        edit_comment_error: true
      }

    case '!EDIT_COMMENT_ERROR':
      return {
        ...state,
        edit_comment_error: false
      }

    case 'PROFILE_ERROR':
      return {
        ...state,
        profile_error: true
      }

    case '!PROFILE_ERROR':
      return {
        ...state,
        profile_error: false
      }

    case 'PROFILE_POSTS_ERROR':
      return {
        ...state,
        profile_posts_error: true
      }

    case '!PROFILE_POSTS_ERROR':
      return {
        ...state,
        profile_posts_error: false
      }

    default:
      return state


  }
}

export default error;