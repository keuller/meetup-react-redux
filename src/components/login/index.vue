<template>
    <card custom-class-name='login-box' shadow>
        <form id='loginForm' v-on:submit.prevent='on_submit'>
            <card-title custom-class-name='login-title'>
                <card-title-text>Autentique-se</card-title-text>
            </card-title>
            <card-content>
                <grid>
                    <cell size='12'>
                        <mdl-input v-ref:email 
                            type="text" 
                            field-label="E-mail" 
                            error-message="Campo invalido!" 
                            floating-label required></mdl-input>
                    </cell>
                </grid>
                <grid>
                    <cell size='12'>
                        <mdl-input v-ref:senha 
                            type="password" 
                            field-label="Senha" floating-label required></mdl-input>
                    </cell>
                </grid>
            </card-content>
            <card-actions>
               <link-button flat event='onSignup'>Cadastrar</link-button>
               <spacer></spacer>
               <mdl-button type='submit' ripple colored success>Acessar</mdl-button>
            </card-actions>
        </form>
    </card>
</template>

<script>
    import Layout from 'mdl/layout'
    import 'components/login/login.css'
    import { showSignup, DO_LOGIN } from 'store/reducers'
    import store  from 'store'
    import Users from 'api/users'
    
    export default {
        props: {
            event: { type: String }
        },
        
        events: {
            onSignup() {
                store.dispatch(showSignup())
            }
        },
        
        methods: {
            on_submit() {
                let credentials = {
                    email: this.$refs.email.value(),
                    senha: this.$refs.senha.value()
                }
                
                let usuario = Users.authenticate(credentials)
                if (usuario) {
                    this.$dispatch(this.event, `Ola ${usuario.nome}, seja bem vindo!`)
                    console.log('usuario', usuario)
                    store.dispatch({ type: DO_LOGIN })
                } else {
                    this.$dispatch(this.event, 'Dados invalidos, tente novamente!')
                }                
            }
        },
        
        components: {
            spacer: Layout.spacer
        }
    }
</script>
