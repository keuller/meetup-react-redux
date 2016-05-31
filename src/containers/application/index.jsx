import { PropTypes } from 'react'
import { Layout, Content } from 'mdl/layout'
import { Grid, Cell } from 'mdl/grid'
import Snackbar from 'mdl/snackbar'

import Header from 'components/header'
import Login  from 'components/login'
import Signup from 'components/signup'
import Dashboard from 'components/dashboard'

const App = React.createClass({
    
    getInitialState() {
        return { currentView: 'login' }
    },
    
    doLogout() {
        this.context.store.dispatch({ type: DO_LOGOUT })
    },
    
    renderView() {
        switch(this.state.currentView) {
            case 'signup':
                return (<Signup notify={this.notification} />)
            case 'dashboard':
                return (<Dashboard/>)
            default: 
                return (<Login notify={this.notification} />)
        }
    },
    
    notification(message) {
        this.refs.notification.show(message)
    },
    
    componentDidMount() {
        let { store } = this.context
        this.unsubscribe = store.subscribe(() => {
            this.setState({ currentView: store.getState().view })
        })
    },
    
    componentWillUnmount() {
        this.unsubscribe()
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
})

App.contextTypes = { 
    store: PropTypes.object 
}

export default App
