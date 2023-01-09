import {Component} from "./Componet";


class Form extends Component{
    constructor() {
        this.elementsEmail = new Input(findElement('inputEmail'));
        this.elementsPassword = new Input('inputPassword');
    }
    
    handleChange(data) { // data must be object
        const {name, value} = data;

        if (this.form.hasOwnPropperty(name)) {
            this.form[name] = value;
        }
    }

    render() {
        const email = new FormEmail();
        email.onChange(this.handleChange);

        // create div
        // append email in div
        const parent = document.createElement('div');
        email.render(parent);

        document.body.append(
            parent
        );
    }

    send() {
        // make validation this form
        // if isValid - send request
    }

    renderDoctor(){
        //...
    }
    renderDoctor2(){
        //...
    }
    renderDoctor3(){
        //...
    }
}



class FormEmail extends Form {
   onChange(cb) {
        // add event listener
        // call cb on event with value
        // const {name, value} = event.currentTarget;
        // cb({name, value});
    }
}

export {
    Form,
    FormEmail
}



// class Form extends Component{
//     constructor() {
//         super();
//         this.form = {
//             email: null,
//             name: null,
//         };
//     }
    
//     handleChange(data) { // data must be object
//         const {name, value} = data;

//         if (this.form.hasOwnPropperty(name)) {
//             this.form[name] = value;
//         }
//     }

//     render() {
//         const email = new FormEmail();
//         email.onChange(this.handleChange);

//         // create div
//         // append email in div
//         const parent = document.createElement('div');
//         email.render(parent);

//         document.body.appendChild(
//             parent
//         );
//     }

//     send() {
//         // make validation this form
//         // if isValid - send request
//     }
// }

// class FormEmail extends Form {
//     onChange(cb) {
//         // add event listener
//         // call cb on event with value
//         // const {name, value} = event.currentTarget;
//         // cb({name, value});
//     }
// }

// class FormSearch {
//     constructor() {
//         const elements = formElementsDeclaration.filter(e => e.form === 'formSearch')

//     }
// }
