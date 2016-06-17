
/*
 * colecao de usuarios (simula API externa)
 */
function Users() {
    this.data = [{ id: 987, nome: 'Abdoral Gusmao', email:'abdoral@gmail.com', senha: '123'}]
}

Users.prototype = {
    add(model) {
        model.id = Math.round((Math.random(5) + 1) * 7)
        this.data.push(model)
        console.log('User added: ', this.data)
    },
    
    remove(id) {
        let filtered = this.users.filter(item => {
            return (item.id !== id)
        }).map(user => {
            return user
        })
        this.data = filtered
    },
    
    authenticate(model) {
        let users = this.data.filter(user => {
            return (user.email === model.email)
        })
        if (users.length > 0 && users[0].senha === model.senha) return users[0]
        return null
    }
}

export default new Users()
