import {Component, formElementsDeclaration} from './Componet'
import { findElement, makeRequest, visitorList } from './main';
import { DoctorModal } from './Modal';
import { Button } from './modalComponent';

// // Visit 


export class Visit extends Component {
    constructor(userData){
        super(userData);
    }
    render(elementData, parent){
        super.render(elementData, parent);
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card__header');
        cardHeader.innerHTML = `
            <p class="patient__name">${this.userData.name}</p>
            <button class="btn btn-close close__card" type="button"></button>`;
        const cardDoctor = document.createElement('p');
        cardDoctor.classList.add('patient__doctor');
        cardDoctor.textContent = `${this.userData.doctor}`;
        const cardMoreBtn = document.createElement('button');
        cardMoreBtn.classList.add('btn', 'more__btn');
        cardMoreBtn.textContent = 'Show More Info';
        const cardFull = document.createElement('div');
        cardFull.classList.add('card__full', 'hide', );
        cardFull.dataset.id = this.userData.id
        cardFull.innerHTML = `
            <p class="visit-target">The purpose of the visit: <b>${this.userData.visitTarget}</b></p>
            <p class="description">Describe problem: <b>${this.userData.description}</b></p>
            <p class="selectedUrgency">Urgency: <b>${this.userData.selectedUrgency}</b></p>`;
        const cardEditBtn = document.createElement('button');
        cardEditBtn.classList.add('btn', 'edit__btn');
        cardEditBtn.textContent = 'Edit';
        this.elementById.append(cardHeader, cardDoctor, cardMoreBtn, cardFull, cardEditBtn);
        
        this.onInfoBtn;
        this.onDelete;
        this.onEdit;
    }
    onInfoBtn(id){
            const cardFullInfo = document.querySelector(`[data-id='${id}']`);
            cardFullInfo.classList.toggle('hide')
    }
    async onDelete(cardId){
        const request = makeRequest(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, null, 'DELETE')
        const status = await request;
        if (status === 200) {
            const el = document.getElementById(`${cardId}`)
            el.remove()
        }
    }
    async onEdit(id){
        const visitorsInArr = await visitorList();
        const [visitor] = visitorsInArr.filter(el=>el.id === +id);
        new DoctorModal(visitor).render(findElement(formElementsDeclaration, 'DoctorModal'))
    }
}

export class VisitDantist extends Visit{
    constructor(userData){
        super(userData)
    }
    render(elementData, parent){
        super.render(elementData, parent);
        const cardFull = document.querySelector(`[data-id='${this.elementById.id}']`)
        cardFull.innerHTML += `
            <p class="last-seance">Last seance: <b>${this.userData.lastSeance}</b></p>`;
    }
}

export class VisitTherapist extends Visit{
    constructor(userData){
        super(userData)
    }
    render(elementData, parent){
        super.render(elementData, parent);
        const cardFull = document.querySelector(`[data-id='${this.elementById.id}']`)
        cardFull.innerHTML += `
            <p class="age">Patient age: <b>${this.userData.age}</b></p>`;
    }
}

export class VisitCardiologist extends Visit{
    constructor(userData){
        super(userData)
    }
    render(elementData, parent){
        super.render(elementData, parent);
        const cardFull = document.querySelector(`[data-id='${this.elementById.id}']`)
        cardFull.innerHTML += `
            <p class="blood-pressure">Blood pressure: <b>${this.userData.bloodPressure}</b></p>
            <p class="BMI">BMI: <b>${this.userData.BMI}</b></p>
            <p class="heart-disease">Heart disease: <b>${this.userData.heartDisease}</b></p>
            <p class="age">Patient age: <b>${this.userData.age}</b></p>`;
    }
}

