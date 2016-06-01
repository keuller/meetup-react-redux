<template>
    <card custom-class-name='login-box' shadow>
        <form id='loginForm' onSubmit={this.onSubmit}>
            <card-title custom-class-name='login-title'>
                <card-title-text>Cadastre-se</card-title-text>
            </card-title>
            <card-content>
                <grid>
                    <cell size='12'>
                        <mdl-input v-ref:nome 
                            type="text" 
                            field-label="Nome Completo" 
                            error-message="Campo invalido!" 
                            floating-label required></mdl-input>
                    </cell>
                </grid>
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
               <spacer></spacer>
               <mdl-button raised colored event='onConfirm'>Confirmar</mdl-button>
               &nbsp;
               <link-button flat event='onCancel'>Cancelar</link-button>
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
            onCancel() {
                console.log('-> cancel')
            },
            
            onConfirm() {
                let model = {
                    nome: this.$refs.nome.value(),
                    email: this.$refs.email.value(),
                    senha: this.$refs.senha.value()
                }
                console.log('-> confirm', model)
            }
        },
        
        components: {
            grid: Grid.grid,
            cell: Grid.cell,
            spacer: Layout.spacer
        }
    }
</script>
