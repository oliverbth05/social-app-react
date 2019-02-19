const initialState = {
    comments: [],
    commentsPage: 1,
    count: 0,
    noMoreComments: false
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
            
        case 'END_COMMENTS' :
            return {
                ...state,
                noMoreComments: true
            }
            
        case '!END_COMMENTS' :
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
        default:
            return state
    }
}

export default comments;