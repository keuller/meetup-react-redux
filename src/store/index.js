import { createStore, combineReducers } from 'redux'
import { view, isLogged } from 'store/reducers'

// estado inicial da STORE
const initialState = {
    isLogged: false,
    view: 'login'
}

// reducer principal - "combina" todos os reducers
let rootReducer = combineReducers({
    view, isLogged
})

// exporta a store da aplicacao
export default createStore(rootReducer, initialState)
