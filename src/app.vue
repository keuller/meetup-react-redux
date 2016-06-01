
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
                    <login v-if='view == "login"'></login>
                    <signup v-if='view == "signup"'></signup>
                </cell>
                <cell size='4'>&nbsp;</cell>
            </grid>
        </content>
    </layout>
</template>

<script>
    import Layout from 'mdl/layout'
    import Grid   from 'mdl/grid'
    import Header from 'components/header/header'
    import Login  from 'components/login/login'
    import Signup from 'components/signup/signup'
    import store  from 'store'
    
    export default {
        data() {
            return {
                view: this.$select('view') // store.getState().view (React mode)
            }
        },
        
        components: {
            layout: Layout.layout,
            appHeader: Header,
            content: Layout.content,
            grid: Grid.grid,
            cell: Grid.cell,
            login: Login,
            signup: Signup
        }
    }
</script>
