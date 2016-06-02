<style>
.mdl-navigation__link a { color:#ffffff; }
</style>

<template>
    <app-bar>
        <app-title value='Meetup Vue/Redux'></app-title>
        <spacer></spacer>
        <navigation>
            <navigation-item event='on_logout' v-if='isLogged == true'>Sair</navigation-item>
        </navigation>
    </app-bar>
</template>

<script>
    import { SHOW_LOGIN } from 'store/reducers'
    import store from 'store'
    
    export default {
        data() {
            return {
                isLogged: this.$select('isLogged')
            }
        },

        events: {
            on_logout() {
                store.dispatch({ type: SHOW_LOGIN })
            }
        }        
    }
</script>
