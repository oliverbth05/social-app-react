const show = (state = null, action) => {
    switch (action.type) {

        
        case 'FETCH_POST':
            return {
                ...state,
                post: action.payload.post,
                comments: action.payload.comments,
            }

        case 'LIKE_POST':
                console.log('liked')
            var post = {...state.post}
            post.likes.push(action.payload)
            
            return {
                ...state,
                post
            }
            
    
        default: 
            return state
    }   
}

export default show;