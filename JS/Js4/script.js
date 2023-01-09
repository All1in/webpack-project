"use strict";

function createNewUser() {
    let name, surname;
    do {
        name = prompt("Enter your name: ", name);
        surname = prompt("Enter your surname: ", surname);
    } while (!name.length || !surname.length);
    return {
        _firstName: name,
        _lastName: surname,
        getLogin: function () {
            return `${this._firstName.charAt(0).toLowerCase()}${this._lastName.toLowerCase()}`;
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
console.log(user.getLogin());

console.log("Input setFirstName() & setLastName()")
user.firstName = "Ivan";
console.log(user.getLogin());

user.lastName = "Kravchenko";
console.log(user.getLogin());
