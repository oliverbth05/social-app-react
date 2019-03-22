const initialState = {
    posts: null,
    reachedEnd: false,
    fetchOnLoad: true,
    searchTerm: null,
    sort: null,
    page: 1,
    loading: false
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
            
        case 'SEARCH_LOADING' :
            return {
                ...state,
               loading: true
            }
            
        case '!SEARCH_LOADING' :
            return {
                ...state,
               loading: false
            }
        
        default :
            return state
    }
}

export default search;