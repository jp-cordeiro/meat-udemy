"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined
            && another.email === this.email
            && another.password == this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "1@teste.com": new User("1@teste.com", "teste1", "teste1"),
    "2@teste.com": new User("2@teste.com", "teste2", "teste2")
};
