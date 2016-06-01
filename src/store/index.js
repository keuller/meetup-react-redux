import { createStore, combineReducers } from 'redux'
import Revue from 'revue'
import { view, isLogged, users } from 'store/reducers'

// estado inicial da STORE
const initialState = {
    isLogged: false,
    view: 'login'
}

// reducer principal - "combina" todos os reducers
let rootReducer = combineReducers({
    view, isLogged, users
})

// exporta a store da aplicacao
const reduxStore = createStore(rootReducer, initialState)

// Vue redux binding
export default new Revue(Vue, reduxStore)
