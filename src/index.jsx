import { render } from 'react-dom'
import mdl from 'mdl/mdl.scss'
import { Layout, Content } from 'mdl/layout'
import { Grid, Cell } from 'mdl/grid'
import Snackbar from 'mdl/snackbar'

import Header from 'components/header'
import Login  from 'components/login'
import Signup from 'components/signup'
import Dashboard from 'components/dashboard'

const App = React.createClass({
    resetView() {
        return { view: <Login onSignup={this.showSignup} onLogin={this.showDash} notify={this.notification} />, isLogged: false }
    },
    
    getInitialState() {
        return this.resetView()
    },
    
    showLogin() {
        this.setState(this.resetView())
    },

    showSignup() {
        this.setState({ view: <Signup onCancel={this.showLogin} notify={this.notification} /> })
    },
    
    showDash() {
        this.setState({ view: <Dashboard/>, isLogged: true })
    },
    
    doLogout() {
        this.setState(this.resetView())
    },
    
    notification(message) {
        this.refs.notification.show(message)
    },
    
    render() {
        return (
            <Layout fixed={true}>
                <Header logged={this.state.isLogged} doLogout={this.doLogout} />
                <Content>
                    <Grid>
                        <Cell size='12'>
                            &nbsp;
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell size='4'>&nbsp;</Cell>
                        <Cell size='4'>
                            {this.state.view}
                        </Cell>
                        <Cell size='4'>&nbsp;</Cell>
                    </Grid>
                </Content>
                <Snackbar ref='notification' />
            </Layout>
        )
    }
})

document.addEventListener('DOMContentLoaded', (ev) => {
    render(<App />, document.getElementById('app'))
})
