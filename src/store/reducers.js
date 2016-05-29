// action constant types
export const SHOW_LOGIN  = 'SHOW_LOGIN'
export const SHOW_SIGNUP = 'SHOW_SIGNUP'

export const DO_LOGIN  = 'DO_LOGIN'
export const DO_LOGOUT = 'DO_LOGOUT'

// action creators 
export const showLogin = () => ({ type: SHOW_LOGIN })
export const showSignup = () => ({ type: SHOW_SIGNUP })

// reducers functions
export const view = (state, action) => {
    switch(action.type) {
        case SHOW_SIGNUP:
            return 'signup'
        case DO_LOGIN:
            return 'dashboard'
        default:
            return SHOW_LOGIN
    }
}

export const isLogged = (state, action) => {
    if (action.type === DO_LOGIN)
        return true
    return false
}
