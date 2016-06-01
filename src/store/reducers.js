import Users from 'api/users'

// action constant types
export const SHOW_LOGIN  = 'SHOW_LOGIN'
export const SHOW_SIGNUP = 'SHOW_SIGNUP'

export const DO_LOGIN  = 'DO_LOGIN'
export const DO_LOGOUT = 'DO_LOGOUT'

export const ADD_USER  = 'ADD_USER'

// action creators 
export const showLogin = () => ({ type: SHOW_LOGIN })
export const showSignup = () => ({ type: SHOW_SIGNUP })

// reducers functions
export const view = (state = '', action) => {
    switch(action.type) {
        case SHOW_SIGNUP:
            return 'signup'
        case DO_LOGIN:
            return 'dashboard'
        case SHOW_LOGIN:
            return 'login'
        default:
            return state
    }
}

export const users = (state = [], action) => {
    switch(action.type) {
        case ADD_USER: {
            Users.add(action.payload)
            return Users.data
        }
        default:
            return state
    }
}

export const isLogged = (state, action) => {
    if (action.type === DO_LOGIN)
        return true
    return false
}
