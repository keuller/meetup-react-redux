import { createStore, combineReducers } from 'redux'
import { view, isLogged } from 'store/reducers'

const initialState = {
    isLogged: false,
    view: 'login'
}

let rootReducer = combineReducers({
    view, isLogged
})

export default createStore(rootReducer, initialState)
