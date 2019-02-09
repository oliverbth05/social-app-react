const loading = (state = false, action) => {
    switch (action.type) {
        case 'LOADING':
            return true
        case '!LOADING':
            return false
        default :
            return state
    }
}

export default loading;