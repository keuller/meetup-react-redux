import { render } from 'react-dom'
import mdl from 'mdl/mdl.scss'
import appStore from 'store'
import { Provider } from 'react-redux'
import Application from 'containers/application'

document.addEventListener('DOMContentLoaded', (ev) => {
    console.log(appStore.getState())
    render(
        <Provider store={appStore}>
            <Application />
        </Provider>, 
        document.getElementById('app')
    )
})
