import {Component, formElementsDeclaration} from "./Componet";
import { findElement, hideLoginBtn, makeRequest, visitorList, renderedVisit } from "./main";
import {Input, Select, Button} from './modalComponent'
import { VisitCardiologist, VisitDantist, VisitTherapist } from "./Visit";



class Modal extends Component{
    constructor(userData){
        super(userData)
    }
    render(elementData, parent){
        super.render(elementData, parent);
        const header = elementData.header;
        const title = document.createElement('div');
        title.classList.add('modal__title');
        title.innerHTML = `<h5 class="modal__title-text">${header}:</h5>
                            <button class="close-btn btn btn-close close__modal" type="button"></button>`
        const body = document.createElement('div');
        body.classList.add('modal__body');
        const footer = document.createElement('div');
        footer.classList.add('modal__footer');
        if (this.userData) {
            footer.innerHTML = `<button type="button" class="btn btn-primary submit-btn">Edit</button>`
        }else{
            footer.innerHTML = `<button type="button" class="btn btn-primary submit-btn">Create</button>`
        }
        this.elementById.append(title, body, footer);
        this.closeBtn()
    }
    
    closeBtn(){
        const closeBtn = document.querySelector('.close__modal');
        closeBtn.addEventListener('click', (e)=>{
            this.remove()
        })
    }
    
    
}

class LoginModal extends Modal{
    constructor(userData){
        super(userData)
    }
    render(elementData, parent){
        super.render(elementData, parent);
        const inputPass = new Input();
        const inputEmail = new Input();
        const body = document.querySelector('.modal__body');
        inputEmail.render(findElement(formElementsDeclaration, 'LoginEmail'), body);
        inputPass.render(findElement(formElementsDeclaration, 'LoginPassword'), body);
        this.submit();
    }
    submit(){
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.addEventListener('click', (e)=>{
            let email = document.querySelector('#email')
            let pass = document.querySelector('#password')
            localStorage.setItem("email", email.value)
            localStorage.setItem("password", pass.value)
            this.remove()
            hideLoginBtn()
        })
    }
}

class DoctorModal extends Modal{
    constructor(userData){
        super(userData);
    }
    render(elementData, parent){
        super.render(elementData, parent);
        const selectDoctor = new Select();
        const body = document.querySelector('.modal__body');
        const patientData = document.createElement('form');
        patientData.classList.add('patient-data', 'top-15');
        patientData.setAttribute('name', 'patient-data');
        const selectData = findElement(formElementsDeclaration, 'SelectDoctor')
        selectDoctor.render(selectData, body);
        if (this.userData) {
            selectDoctor.elementById.value = this.userData.doctor
        }
        body.append(patientData);
        this.chooseDoctor();
        this.renderDoctor(selectData.options.find(o => o.selected).value);
        this.submit();
    }
    renderDoctorInput(){
        const rootPatientData = document.querySelector('.patient-data');
        rootPatientData.innerHTML = '';
        const visitTarget = new Input();
        const visitDescr = new Input();
        const visitUrgent = new Select();
        const visitorName = new Input();
        visitTarget.render(findElement(formElementsDeclaration, 'VisitTarget'), rootPatientData);
        visitDescr.render(findElement(formElementsDeclaration, 'VisitDescription'), rootPatientData);
        visitUrgent.render(findElement(formElementsDeclaration, 'VisitUrgency'), rootPatientData);
        visitorName.render(findElement(formElementsDeclaration, 'VisitorName'), rootPatientData);
        if (this.userData) {
            visitTarget.elementById.value = this.userData.visitTarget;
            visitDescr.elementById.value = this.userData.description;
            visitUrgent.elementById.value = this.userData.selectedUrgency;
            visitorName.elementById.value = this.userData.name;
        }
        
    }
    renderCardiologist(){
        const rootPatientData = document.querySelector('.patient-data');
        this.renderDoctorInput();
        const bloodPressure = new Input();
        const bmi = new Input();
        const heartDisease = new Input();
        const age = new Input();
        bloodPressure.render(findElement(formElementsDeclaration, 'VisitorBloodPressure'), rootPatientData);
        bmi.render(findElement(formElementsDeclaration, 'VisitorBMI'), rootPatientData);
        heartDisease.render(findElement(formElementsDeclaration, 'VisitorHeartDisease'), rootPatientData);
        age.render(findElement(formElementsDeclaration, 'VisitorAge'), rootPatientData);
        if (this.userData) {
            bloodPressure.elementById.value = this.userData.bloodPressure;
            bmi.elementById.value = this.userData.BMI;
            heartDisease.elementById.value = this.userData.heartDisease;
            age.elementById.value = this.userData.age;
        }

    }
    renderDantist(){
        const rootPatientData = document.querySelector('.patient-data');
        this.renderDoctorInput();
        const lastSeance = new Input();
        lastSeance.render(findElement(formElementsDeclaration, 'VisitorLastSeance'), rootPatientData);
        if (this.userData) {
            lastSeance.elementById.value = this.userData.lastSeance;
        }
    }
    renderTherapist(){
        const rootPatientData = document.querySelector('.patient-data');
        this.renderDoctorInput();
        const age = new Input();
        age.render(findElement(formElementsDeclaration, 'VisitorAge'), rootPatientData);
        if (this.userData) {
            age.elementById.value = this.userData.age;
        }
    }

    renderDoctor(doctor) {
        switch (doctor) {
            case 'cardiologist':
                this.renderCardiologist()
                break;
            case 'dantist':
                this.renderDantist()
                break;
            case 'therapist':
                this.renderTherapist()
                break;
            default:
                break;
        }
    }

    chooseDoctor(){
        const select = document.querySelector('.select__doctor');
        select.addEventListener('change', (e)=>{
            this.renderDoctor(select.value);
        })
    }
    getPatientData(){
        const patientDataForm = document.querySelector('[name="patient-data"]');
        const doctor = document.querySelector('.select__doctor');
        const patientDataArr = [...patientDataForm.elements];
        const patientDataObj = {doctor: doctor.value};
        if (this.userData) {
            patientDataObj.id = this.userData.id;
        }
        patientDataArr.forEach(el=>{
            patientDataObj[el.name] = el.value;
        })
        return patientDataObj;
    }
    submit(){
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.addEventListener('click', async (e)=>{
            let request;
            let cardData;
            if (!this.userData) {
                request = makeRequest('https://ajax.test-danit.com/api/v2/cards', this.getPatientData(), 'POST');
                cardData = await request;
            }else{
                request = makeRequest(`https://ajax.test-danit.com/api/v2/cards/${this.userData.id}`, this.getPatientData(), 'PUT');
                cardData = await request;
                const delEl = document.getElementById(`${this.userData.id}`);
                delEl.remove();
            }

            if (cardData.hasOwnProperty('id')) {
                let root = document.querySelector('.card__root>.container');
                switch (cardData.doctor) {
                    case 'cardiologist':
                        let visitCardio = new VisitCardiologist(cardData);
                        visitCardio.render(addUserIdToElementData(cardData, findElement(formElementsDeclaration, 'VisitCard')), root);
                        renderedVisit.push(visitCardio);
                        // visitorList()
                        break;
                    case 'dantist':
                        let visitDant = new VisitDantist(cardData);
                        visitDant.render(addUserIdToElementData(cardData, findElement(formElementsDeclaration, 'VisitCard')), root);
                        renderedVisit.push(visitDant);
                        // visitorList()
                        break;
                    case 'therapist':
                        let visitTherap = new VisitTherapist(cardData)
                        visitTherap.render(addUserIdToElementData(cardData, findElement(formElementsDeclaration, 'VisitCard')), root);
                        renderedVisit.push(visitTherap);
                        // visitorList()
                        break;
                    default:
                        break;
                }
                
                this.remove()
            }
        })
    }
}
export function addUserIdToElementData(userData, elementData) {
    return {...elementData, attributes: {id: userData.id}}
}

export{
    Modal,
    LoginModal,
    DoctorModal
}

