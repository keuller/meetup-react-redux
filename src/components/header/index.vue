
<template>
    <app-bar>
        <app-title value='Meetup Vue/Redux'></app-title>
        <spacer></spacer>
        <navigation>
            <navigation-item event='on_logout' v-show='isLogged == true'>Sair</navigation-item>
        </navigation>
    </app-bar>
</template>

<script>
    import 'components/header/header.css'
    import Layout from 'mdl/layout'
    import { SHOW_LOGIN } from 'store/reducers'
    import store from 'store'
    
    export default {
        data() {
            return {
                isLogged: this.$select('isLogged')
            }
        },
        
        props: {
            logged: {
                type: Boolean
            }
        },
        
        events: {
            on_logout() {
                store.dispatch({ type: SHOW_LOGIN })
            }
        },
        
        components: {
            appBar: Layout.appBar,
            appTitle: Layout.appTitle,
            spacer: Layout.spacer,
            navigation: Layout.navigation,
            navigationItem: Layout.navigationItem
        } 
    }
</script>
