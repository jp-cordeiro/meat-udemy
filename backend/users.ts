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

export const users: {[key:string] : User} = {
    "1@teste.com": new User("1@teste.com","teste1","teste1"),
    "2@teste.com": new User("2@teste.com","teste2","teste2")
}