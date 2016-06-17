import { observable, action } from 'mobx'

let AppState = {
    currentView: 'login',
    logged: false
}

export let changeView = action('changeView', (viewName) => {
    AppState.currentView = viewName
})

export let logout = action('logout', () => {
    AppState.currentView = 'login'
    AppState.logged = false
})

export let login = action('login', () => {
    AppState.currentView = 'dashboard'
    AppState.logged = true
})

export default observable(AppState)
