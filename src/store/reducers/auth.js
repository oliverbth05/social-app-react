const initialState = {
    authenticated: false,
    token: null,
    user: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        
        case 'LOGIN' :
            return {
                authenticated: true,
                token: action.payload.token,
                user: action.payload.user
            }
            
        default:
            return state
    }
    
    
}

export default auth;