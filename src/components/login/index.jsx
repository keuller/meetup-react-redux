import { action } from 'mobx'
import { observer } from 'mobx-react'
import { Grid, Cell } from 'mdl/grid'
import { LayoutSpacer } from 'mdl/layout'
import { Card, CardTitle, CardTitleText, CardContent, CardActions } from 'mdl/card'
import { Button, LinkButton } from 'mdl/button'
import Input from 'mdl/input'
import 'components/login/login.css'
import Users from 'api/users'
import { changeView, login } from 'state'

const Login = React.createClass({
    
    onSubmit(ev) {
        ev.preventDefault()
        let credentails = {
            email: this.refs.email.getState().value,
            senha: this.refs.senha.getState().value
        }
        let usuario = Users.authenticate(credentails)
        if (usuario) {
            this.props.notify(`Ola ${usuario.nome}, seja bem vindo!`)
            console.log('usuario', usuario)
            login()
        } else {
            this.props.notify('Dados invalidos, tente novamente!')
        }
    },
    
    onSignup(ev) {
        changeView('signup')
    },
    
    render() {
        return (
            <Card customClassName='login-box' shadow={true}>
                <form id='loginForm' onSubmit={this.onSubmit}>
                    <CardTitle customClassName='login-title'>
                        <CardTitleText>Autentique-se</CardTitleText>
                    </CardTitle>
                    <CardContent>
                        <Grid>
                            <Cell size='12'>
                                <Input ref='email' type='text' label='E-mail' floating-label required />
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell size='12'>
                                <Input ref='senha' type='password' label='Senha' floating-label required />
                            </Cell>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <LinkButton flat onClick={this.onSignup}>Cadastrar</LinkButton>
                        <LayoutSpacer />
                        <Button type='submit' ripple colored success>Acessar</Button>
                    </CardActions>
                </form>
            </Card>
        )
    }
})

export default observer(Login)
