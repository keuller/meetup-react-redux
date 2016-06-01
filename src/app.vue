
<template>
    <layout>
        <app-header></app-header>
        <content>
            <grid>
                <cell size='12'>
                    &nbsp;
                </cell>
            </grid>
            <grid>
                <cell size='4'>&nbsp;</cell>
                <cell size='4'>
                    <login v-if='view == "login"' event='notify'></login>
                    <signup v-if='view == "signup"'></signup>
                    <dashboard v-if='view == "dashboard"'></dashboard>
                </cell>
                <cell size='4'>&nbsp;</cell>
            </grid>
        </content>
        <mdl-snackbar v-ref:notify></mdl-sbackbar>
    </layout>
</template>

<script>
    import Layout from 'mdl/layout'
    import Header from 'components/header'
    import Login  from 'components/login'
    import Signup from 'components/signup'
    import Dashboard from 'components/dashboard'
    import store  from 'store'
    
    export default {
        data() {
            return {
                view: this.$select('view') // store.getState().view (React mode)
            }
        },
        
        events: {
            notify(msg) {
                this.$refs.notify.show(msg)
            }
        },
        
        components: {
            layout: Layout.layout,
            appHeader: Header,
            content: Layout.content,
            login: Login,
            signup: Signup,
            dashboard: Dashboard
        }
    }
</script>
