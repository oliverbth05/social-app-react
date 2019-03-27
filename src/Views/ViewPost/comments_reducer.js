const initialState = {
    comments: [],
    commentsPage: 1,
    count: 0,
    noMoreComments: false,
    loading: false,
    more_loading: false,
    error: false
}

const comments = (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_COMMENTS':
            return {
                ...state,
                comments: action.payload.comments,
                count: action.payload.count,
                commentsPage: 2
            }

        case 'FETCH_MORE_COMMENTS':
            return {
                ...state,
                comments: state.comments.concat(action.payload.comments),
                commentsPage: state.commentsPage + 1,
                count: action.payload.count
            }

        case 'END_COMMENTS':
            return {
                ...state,
                noMoreComments: true
            }

        case '!END_COMMENTS':
            return {
                ...state,
                noMoreComments: false
            }

        case 'POST_COMMENT':
            return {
                ...state,
                comments: [action.payload, ...state.comments],
                count: state.count + 1
            }

        case 'LIKE_COMMENT':

            var comments = state.comments.map(comment => {
                if (comment._id === action.payload.comment_id) {
                    comment.likes.push(action.payload.user_id)
                }

                return comment
            })

            return {
                ...state,
                comments
            }

        case 'COMMENT_ERROR':
            return {
                ...state,
                error: true
            }

        case '!COMMENT_ERROR':
            return {
                ...state,
                error: false
            }

        case 'COMMENTS_LOADING':
            return {
                ...state,
                loading: true
            }

        case '!COMMENTS_LOADING':
            return {
                ...state,
                loading: false
            }

        case 'MORE_COMMENTS_LOADING':
            return {
                ...state,
                more_loading: true
            }

        case '!MORE_COMMENTS_LOADING':
            return {
                ...state,
                more_loading: false
            }
        default:
            return state
    }
}

export default comments;
