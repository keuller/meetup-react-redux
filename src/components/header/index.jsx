import 'components/header/header.css'
import { observer } from 'mobx-react'
import { AppBar, AppTitle, LayoutSpacer } from 'mdl/layout'
import { Navigation, NavigationItem } from 'mdl/layout/navigation'
import { LinkButton } from 'mdl/button'
import Badge from 'mdl/badge'
import Icon from 'mdl/icon'
import AppState, { logout } from 'state'

const Header = React.createClass({
    onLogout(ev) {
        ev.preventDefault()
        logout()
    },
    
    getNavigation() {
        return (
            <Navigation>
                <NavigationItem>
                    <Badge value='2'><Icon value='mdi-comment' /></Badge>
                </NavigationItem>
                <NavigationItem onClick={this.onLogout}>Sair</NavigationItem>
            </Navigation>
        )
    },
    
    render() {
        return (
            <AppBar>
                <AppTitle value='Meetup React/Mobx' />
                <LayoutSpacer />
                {AppState.logged ? this.getNavigation() : null}
            </AppBar>
        )
    }
})

export default observer(Header)
