<template>
    <card custom-class-name='login-box' shadow>
        <form id='loginForm' onSubmit={this.onSubmit}>
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
               <mdl-button ripple colored success event='onAuthenticate'>Acessar</mdl-button>
            </card-actions>
        </form>
    </card>
</template>

<script>
    import Grid from 'mdl/grid'
    import Layout from 'mdl/layout'
    import 'components/login/login.css'
    
    export default {
        events: {
            onSignup() {
                console.log('-> singup')
            },
            
            onAuthenticate() {
                let credentials = {
                    email: this.$refs.email.value(),
                    senha: this.$refs.senha.value()
                }
                
                // let usuario = Users.authenticate(credentails)
                // if (usuario) {
                //     this.props.notify(`Ola ${usuario.nome}, seja bem vindo!`)
                //     console.log('usuario', usuario)
                //     this.props.onLogin()
                // } else {
                //     this.props.notify('Dados invalidos, tente novamente!')
                // }
                console.log('-> authenticate', credentials)
            }
        },
        
        components: {
            grid: Grid.grid,
            cell: Grid.cell,
            spacer: Layout.spacer
        }
    }
</script>
