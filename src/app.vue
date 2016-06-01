
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
                    <login></login>
                </cell>
                <cell size='4'>&nbsp;</cell>
            </grid>
            
        </content>
    </layout>
</template>

<script>
    import Layout from 'mdl/layout'
    import Grid from 'mdl/grid'
    import Header from 'components/header/header'
    import Login from 'components/login/login'
    import Signup from 'components/signup/signup'
    
    export default {
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
