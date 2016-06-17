import { observer } from 'mobx-react'
import { Grid, Cell } from 'mdl/grid'
import { LayoutSpacer } from 'mdl/layout'
import { Card, CardTitle, CardTitleText, CardContent, CardActions } from 'mdl/card'
import { Button, LinkButton } from 'mdl/button'
import Input from 'mdl/input'
import Users from 'api/users'
import { changeView } from 'state'

const Signup = React.createClass({
    onSubmit(ev) {
        ev.preventDefault()
        let model = {
            nome: this.refs.nome.getState().value,
            email: this.refs.email.getState().value,
            senha: this.refs.senha.getState().value
        }
        Users.add(model)
        this.props.notify('Conta criada com sucesso.')
        this.onCancel(ev)
    },
    
    onCancel(ev) {
        ev.preventDefault()
        changeView('login')
    },
    
    componentDidMount() {
        this.refs.nome.focus()
    },
    
    render() {
        return (
            <Card customClassName='login-box' shadow={true}>
                <form id='signupForm' onSubmit={this.onSubmit}>
                    <CardTitle customClassName='login-title'>
                        <CardTitleText>
                            Cadastre-se
                        </CardTitleText>
                    </CardTitle>
                    <CardContent>
                        <Grid>
                            <Cell size='12'>
                                <Input ref='nome' type='text' label='Nome Completo' floating-label required />
                            </Cell>
                        </Grid>
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
                        <LayoutSpacer />
                        <Button type='submit' raised colored>Confirmar</Button>
                        <LinkButton flat accent onClick={this.onCancel}>Cancelar</LinkButton>
                    </CardActions>
                </form>
            </Card>
        )
    }
})

export default observer(Signup)
