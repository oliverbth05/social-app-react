const initialState = {
    data: null,
    post_loading: null,
    like_loading: null,
    pin_loading: null,
    error: null
}

const post = (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_POST':
            return {
                ...state,
                data: action.payload
            }

        case 'LIKE_POST':
            var data = { ...state.data }
            data.likes.push(action.payload)
            return {
                ...state,
                data
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

        case 'POST_ERROR':
            return {
                ...state,
                error: action.payload
            }

        case '!POST_ERROR':
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export default post;
