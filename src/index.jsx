import { render } from 'react-dom'
import { useStrict } from 'mobx'
import { observer } from 'mobx-react'
import mdl from 'mdl/mdl.scss'
import { Layout, Content } from 'mdl/layout'
import { Grid, Cell } from 'mdl/grid'
import Snackbar from 'mdl/snackbar'
import AppState from 'state'

import Header from 'components/header'
import Login  from 'components/login'
import Signup from 'components/signup'
import Dashboard from 'components/dashboard'

useStrict(true)

const App = observer(React.createClass({
    renderView() {
        switch (AppState.currentView) {
            case 'signup': 
                return <Signup notify={this.notification} />
            case 'dashboard': 
                return <Dashboard/>
            default: 
                return <Login notify={this.notification} />
        }
    },

    notification(message) {
        this.refs.notification.show(message)
    },
    
    render() {
        return (
            <Layout fixed={true}>
                <Header />
                <Content>
                    <Grid>
                        <Cell size='12'>
                            &nbsp;
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell size='4'>&nbsp;</Cell>
                        <Cell size='4'>
                            {this.renderView()}
                        </Cell>
                        <Cell size='4'>&nbsp;</Cell>
                    </Grid>
                </Content>
                <Snackbar ref='notification' />
            </Layout>
        )
    }
}))

document.addEventListener('DOMContentLoaded', (ev) => {
    render(<App />, document.getElementById('app'))
})
