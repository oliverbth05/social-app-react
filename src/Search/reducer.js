const initialState = {
    posts: null,
    reachedEnd: false,
    fetchOnLoad: true,
    searchTerm: null,
    sort: null,
    page: 1
}

const search = (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_POSTS' :
            return {
                ...state,
                sort: action.payload.sort,
                searchTerm: action.payload.searchTerm,
                page: 2,
                posts: action.payload.posts,
                fetchOnLoad: false
                
            }
            
        case 'SEARCH_NEEDS_UPDATE' :
            return {
                ...state,
                fetchOnLoad: true
            }
            
        case '!SEARCH_NEEDS_UPDATE' :
            return {
                ...state,
                fetchOnLoad: false
            }
        
        default :
            return state
    }
}

export default search;