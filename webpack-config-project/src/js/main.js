import '../styles/style.css';
import {formElementsDeclaration} from './Componet';
import {LoginModal, DoctorModal, addUserIdToElementData} from './Modal';
import { Visit, VisitCardiologist, VisitDantist, VisitTherapist } from './Visit';
export let renderedVisit = [];

export const TOKEN = 'f175d523-c881-4716-85cf-f3034d585ce0';
export async function makeRequest(url, body, method = 'GET') {
    if (body) {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify(body)
            });
        return await response.json();
    }
    if (method === 'DELETE') {
        const response = await fetch(url, {
            method,
            headers: {
              'Authorization': `Bearer ${TOKEN}`
            },
          });
        return response.status
    }
    if (!body && method === 'GET') {
        const response = await fetch(url, {
            method,
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            },
          });
        return await response.json();
    }

}

export let visitorList = async function () {
    let req = makeRequest('https://ajax.test-danit.com/api/v2/cards', null, 'GET');
    let patList = await req;
    return patList;
    // await patList.forEach(el=>makeRequest(`https://ajax.test-danit.com/api/v2/cards/${el.id}`, null, 'DELETE'))
};

async function reload() {
    const title = document.querySelector('.card-title');
    
    const list = await visitorList();
    // if (list.length >= 1) {
    //     title.classList.add('hide')
    // }else{
    //     title.classList.remove('hide')
    // }
    console.log(list);
    list.forEach(cardData=>{
        let root = document.querySelector('.card__root>.container');
        switch (cardData.doctor) {
            case 'cardiologist':
                let visitCardio = new VisitCardiologist(cardData);
                visitCardio.render(addUserIdToElementData(cardData, findElement(formElementsDeclaration, 'VisitCard')), root);
                renderedVisit.push(visitCardio);
                break;
            case 'dantist':
                let visitDant = new VisitDantist(cardData);
                visitDant.render(addUserIdToElementData(cardData, findElement(formElementsDeclaration, 'VisitCard')), root);
                renderedVisit.push(visitDant);
                break;
            case 'therapist':
                let visitTherap = new VisitTherapist(cardData)
                visitTherap.render(addUserIdToElementData(cardData, findElement(formElementsDeclaration, 'VisitCard')), root);
                renderedVisit.push(visitTherap);
                break;
            default:
                break;
        }
    })
}
reload()



let loginBtn = document.querySelector('.login-btn');
let makeVisitBtn = document.querySelector('.visit-btn');
export function findElement(arr, param) {
    return arr.find(el => el.form === param)
}
export function hideLoginBtn() {
    if (localStorage.password && localStorage.email) {
        loginBtn.classList.add('hide');
        makeVisitBtn.classList.remove('hide');
    }else{
        loginBtn.classList.remove('hide');
        makeVisitBtn.classList.add('hide');
    }
}

hideLoginBtn()
let loginModal = new LoginModal();
loginBtn.addEventListener('click', (e)=>{
    loginModal.render(findElement(formElementsDeclaration, 'LoginModal'))
})
let doctorModal = new DoctorModal();
makeVisitBtn.addEventListener('click', (e)=>{
    doctorModal.render(findElement(formElementsDeclaration, 'DoctorModal'));
})
const cardRoot = document.querySelector('.card__root');
cardRoot.addEventListener('click', (e)=>{
    let target = e.target;
    const closestEl = target.closest('.card').id;
    if (target.classList.value === 'btn more__btn') {
        let [info] = renderedVisit.filter(el=>el.userData.id === +closestEl);
        info.onInfoBtn(closestEl);
    }
    if (target.classList.value === 'btn btn-close close__card') {
        let [toDelete] = renderedVisit.filter(el=>el.userData.id === +closestEl);
        toDelete.onDelete(closestEl);
    }
    if (target.classList.value === 'btn edit__btn') {
        let [toClose] = renderedVisit.filter(el=>el.userData.id === +closestEl);
        toClose.onEdit(closestEl);
    }

})

