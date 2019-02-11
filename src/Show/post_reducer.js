const post = (state = null, action) => {
    switch (action.type) {
 
        case 'FETCH_POST':
            
            return action.payload
        
        case 'LIKE_POST':
            var post = {...state}
            post.likes.push(action.payload)
            return post
            
        default: 
            return state
    }   
}

export default post;