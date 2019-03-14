const initialState = {
    layout: 'list',
    posts: null,
    reachedEnd: false,
    sort: 'Recent',
    page: 1,
    fetchOnLoad: true,
    searchTerm: '',

    loading: false,
    more_loading: false,
    error: false
}

const home = (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_POSTS':
            return {
                ...state,
                posts: action.payload,
                page: 2
            }

        case 'FETCH_MORE_POSTS':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            }

        case 'HOME_NEEDS_UPDATE':
            return {
                ...state,
                fetchOnLoad: true
            }

        case '!HOME_NEEDS_UPDATE':
            return {
                ...state,
                fetchOnLoad: false
            }

        case 'REACHED_END':
            return {
                ...state,
                reachedEnd: true
            }

        case '!REACHED_END':
            return {
                ...state,
                reachedEnd: false
            }


        case 'CHANGE_LAYOUT':
            return {
                ...state,
                layout: action.payload
            }

        case 'CHANGE_SORT':
            return {
                ...state,
                sort: action.payload
            }

        case 'POSTS_ERROR':
            return {
                ...state,
                error: true
            }

        case '!POSTS_ERROR':
            return {
                ...state,
                error: false
            }

        case 'POSTS_LOADING':
            return {
                ...state,
                loading: true
            }

        case '!POSTS_LOADING':
            return {
                ...state,
                loading: false
            }

        case 'MORE_POSTS_LOADING':
            return {
                ...state,
                more_loading: true
            }

        case '!MORE_POSTS_LOADING':
            return {
                ...state,
                more_loading: false
            }

        default:
            return state
    }
}

export default home;