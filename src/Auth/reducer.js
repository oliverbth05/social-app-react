const initialState = {
    authenticated: false,
    token: null,
    userData: null
}

const user = (state = initialState, action) => {
    switch (action.type) {
        
        case 'LOGIN' :

            window.localStorage.setItem('authenticated', JSON.stringify(true))
            window.localStorage.setItem('user', JSON.stringify(action.payload.user))
            window.localStorage.setItem('token', JSON.stringify(action.payload.token))
        
            return {
                authenticated: true,
                token: action.payload.token,
                userData: action.payload.user
            }

        case 'KEEP_LOGGED_IN' :

            return {
                authenticated: true,
                token: action.payload.token,
                userData: action.payload.user
            }


        case 'PIN_POST' :
            
            var userData = {...state.userData}
            userData.pins.push(action.payload)

            window.localStorage.setItem('user', JSON.stringify(userData))

            return {
                ...state,
                userData
            }
            
            
        default:
            return state
    }
    
    
}

export default user;