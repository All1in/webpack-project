"use strict";

function createNewUser() {
    let name, surname, birthday;
    const date = new Date();
    const reg = new RegExp('^([0-2][0-9]|(3)[0-1])(\\.)(((0)[0-9])|((1)[0-2]))(\\.)\\d{4}$');
    do {
        name = prompt("Enter your name: ", name);
        surname = prompt("Enter your surname: ", surname);
        birthday = prompt("Enter your birthday in format dd.mm.yyyy", birthday);
    } while (!name.length || !surname.length || !birthday.match(reg));
    return {
        _firstName: name,
        _lastName: surname,
        _birthday: new Date(+birthday.slice(6), +birthday.slice(3, 5) - 1, +birthday.slice(0, 2)),
        getLogin: function () {
            return `${this._firstName.charAt(0).toLowerCase()}${this._lastName.toLowerCase()}`;
        },
        getPassword: function () {
            return `${this._firstName.charAt(0).toUpperCase()}${this._lastName.toLowerCase()}${birthday.slice(6)}`;
        },
        getAge: function () {
            return Math.floor((Date.now() - this._birthday.getTime()) / (1000 * 60 * 60 * 24 * 365));
        },
        get firstName() {
            return this._firstName;
        },
        set firstName(value) {
            if (value.length) {
                this._firstName = value;
            }
        },
        get lastName() {
            return this._lastName;
        },
        set lastName(value) {
            if (value.length) {
                this._lastName = value;
            }
        },
    };
};

let user = createNewUser();
console.log(user.getPassword());
console.log(user.getAge());
