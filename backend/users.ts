export class User{
    constructor(
        public email: string,
        public name: string,
        private password: string
    ){}

    public matches(another: User){
        return another !== undefined
            && another.email === this.email
            && another.password == this.password
    }
}

exports.users = {
    "admin@teste.com": new User("admin@teste.com", "Admin", "teste"),
    "usuario@teste.com": new User("usuario@teste.com", "Usuario", "teste")
};
