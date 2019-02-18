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
                comments: action.payload.comments,
                count: action.payload.count,
                commentsPage: 1
            }

        case 'FETCH_MORE_COMMENTS':
            return {
                comments: state.comments.concat(action.payload),
                commentsPage: state.commentsPage + 1
            }
            
        case 'POST_COMMENT':
            return {
                comments: state.concat(action.payload),
                commentsPage: state.commentsPage
            }
        default: 
            return state
    }   
}

export default comments;