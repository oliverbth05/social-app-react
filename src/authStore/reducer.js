const initialState = {
    authenticated: false,
    token: null,
    userData: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {


        case 'RESET_TOKEN':
            window.localStorage.setItem('token', JSON.stringify('Bullshit'))
            return {
                ...state,
                token: 'This is not a valid token.'
            }

        case 'LOGIN':
            window.localStorage.setItem('authenticated', JSON.stringify(true))
            window.localStorage.setItem('user', JSON.stringify(action.payload.user))
            window.localStorage.setItem('token', JSON.stringify(action.payload.token))

            return {
                authenticated: true,
                token: action.payload.token,
                userData: action.payload.user
            }

        case 'KEEP_LOGGED_IN':
            return {
                authenticated: true,
                token: action.payload.token,
                userData: action.payload.user
            }


        case 'PIN_POST':
            var userData = { ...state.userData }
            userData.pins.push(action.payload)
            window.localStorage.setItem('user', JSON.stringify(userData))

            return {
                ...state,
                userData
            }

        case 'REMOVE_PIN':
            var userData = { ...state.userData }
            userData.pins = state.userData.pins.filter(pin => {
                return pin.post._id !== action.payload.postId
            })
            window.localStorage.setItem('user', JSON.stringify(userData))

            return {
                ...state,
                userData
            }

        case 'ADD_SUB':
            var userData = { ...state.userData }
            userData.subscriptions.push(action.payload);
            window.localStorage.setItem('user', JSON.stringify(userData))

            return {
                ...state,
                userData
            }

        case 'REMOVE_SUB':
            var userData = { ...state.userData }
            userData.subscriptions = userData.subscriptions.filter(sub => {
                return sub.creator_id !== action.payload.creator_id
            })
            window.localStorage.setItem('user', JSON.stringify(userData))

            return {
                ...state,
                userData
            }

        default:
            return state
    }
}

export default auth;
