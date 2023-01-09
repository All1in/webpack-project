export const formElementsDeclaration = [
  {
    form: 'LoginModal',
    tag: 'div', 
    classNames: ['modal__login'], 
    attributes: {id: 'modal-id'}, 
    header: 'Fill in the fields to enter'
  },
  {
    form: "LoginEmail",
    tag: "input",
    type: "text",
    label: "Email:",
    placeholder: 'Enter Email',
    classNames: ["form-control"],
    attributes: {
      id: "email",
      name: "email",
      required: "required"
    }
  },
  {
    form: "LoginPassword",
    tag: "input",
    type: "password",
    label: "Password:",
    placeholder: 'Enter Password',
    classNames: ["form-control"],
    attributes: {
      id: "password",
      name: "password",
      required: "required"
    }
  },
  {
    form: 'DoctorModal',
    tag: 'div', 
    classNames: ['modal__doctor'], 
    attributes: {id: 'modal-doctor-id'}, 
    header: 'Choose a doctor'
  },
  {
    form: "VisitTarget",
    tag: "input",
    type: "text",
    label: "The purpose of the visit:",
    placeholder: 'Write here..',
    classNames: ["form-control", ],
    attributes: {
      id: "visitTarget",
      name: "visitTarget",
      required: "required"
    }
  },
  {
    form: "VisitDescription",
    tag: "textarea",
    label: "Describe patient problem:",
    placeholder: 'Write here..',
    classNames: ["form-control", ],
    attributes: {
      id: "description",
      name: "description",
    }
  },
  {
    form: "VisitUrgency",
    tag: "select",
    // label: "Оберіть терміновість",
    classNames: ["form-select", "top-15"],
    attributes: {
      id: "selectedUrgency",
      name: "selectedUrgency",
      required: "required"
    },
    options: [
      {
        selected: true,
        value: "select",
        text: "Choose urgency"
      },
      {
        selected: false,
        value: "normal",
        text: "Normal"
      },
      {
        selected: false,
        value: "urgent",
        text: "Urgent"
      }
    ]
  },
  {
    form: "VisitorName",
    tag: "input",
    type: "text",
    label: "Enter patient name/surname:",
    placeholder: 'Write here..',
    classNames: ["form-control", ],
    attributes: {
      id: "name",
      name: "name",
      required: "required"
    }
  },
  {
    form: "VisitorBloodPressure",
    tag: "input",
    type: "text",
    label: "Enter patient blood pressure:",
    placeholder: 'Write here..',
    classNames: ["form-control", ],
    attributes: {
      id: "bloodPressure",
      name: "bloodPressure",
      required: "required"
    }
  },
  {
    form: "VisitorBMI",
    tag: "input",
    type: "text",
    label: "Enter 'BMI':",
    placeholder: 'Enter here..',
    classNames: ["form-control", ],
    attributes: {
      id: "BMI",
      name: "BMI",
      required: "required"
    }
  },
  {
    form: "VisitorHeartDisease",
    tag: "input",
    type: "text",
    label: "Enter patient heart disseanse:",
    placeholder: 'Enter here..',
    classNames: ["form-control", ],
    attributes: {
      id: "heartDisease",
      name: "heartDisease",
      required: "required"
    }
  },
  {
    form: "VisitorAge",
    tag: "input",
    type: "text",
    label: "Enter patient age:",
    placeholder: 'Enter here..',
    classNames: ["form-control", ],
    attributes: {
      id: "age",
      name: "age",
      required: "required"
    }
  },
  {
    form: "VisitorLastSeance",
    tag: "input",
    type: "date",
    label: "Enter last visit date:",
    // placeholder: 'Вкажіть тут',
    classNames: ["form-control", ],
    attributes: {
      id: "lastSeance",
      name: "lastSeance",
      required: "required"
    }
  },
  {
    form: "Text",
    tag: "p",
    classNames: ["text"],
    attributes: {
      id: "textName",
      name: "textName",
    },
  },
  {
    form: "VisitCard",
    tag: "div",
    classNames: ["card", ],
    attributes: {
      name: "card",
    },
  },



///////////////////////////////////////////////////////////////////////////////////
  {
    form: "VisitForm",
    tag: "input",
    type: "email",
    label: "Name",
    labelClass: ['col-sm-6', 'col-form-label'],
    placeholder: 'enter name',
    classNames: ["form-control", "second-class-name-if-necessary"],
    attributes: {
      id: "patient-name",
      "data-some-attr": "some-attr-content",
      name: "myInputName",
      // disabled: false
    },
    content: 'Content for Label'
  },
  
  {
    form: "SelectDoctor",
    tag: "select",
    classNames: ["form-select", "select__doctor"],
    attributes: {
      id: "select-doctor",
      name: "select-doctor",
    },
    options: [
      {
        selected: false,
        value: "cardiologist",
        text: "Cardiologist"
      },
      {
        selected: true,
        value: "dantist",
        text: "Dantist"
      },
      {
        selected: false,
        value: "therapist",
        text: "Therapist"
      }
    ]
  },
  {
    form: "Button",
    tag: "button",
    type: "submit",
    classNames: ['btn', 'btn-primary', 'visit-btn',],
    attributes: {
      id: "btn-id",
      "data-some-attr": "some-attr-btn",
      name: "myBtnName",
    },
    content: 'Btn content'
  }
]

export class Component {
  constructor(userData) {
    this.userData = userData ?? null;
    this.elementById = null;
  }
  
  render(elementData, parent = document.body) {
    const element = document.createElement(elementData.tag);
    const elementAttributes = elementData.attributes ?? null;
    const elementClassList = elementData.classNames;
    const type = elementData.type ?? null;
    const label = elementData.label ?? null;
    const placeholder = elementData.placeholder ?? null;

    elementClassList.forEach(className=>{
      element.classList.add(className);
    });
    if (type) {
      element.type = type;
    }
    if (label) {
      element.label = label;
    }
    if (placeholder) {
      element.placeholder = placeholder;
    }
    if (elementAttributes) {
      for(let attr in elementAttributes){
        element.setAttribute(attr, elementAttributes[attr])
      }
    }
    parent.append(element);
    this.elementById = document.getElementById(`${elementAttributes.id}`);
  }
  remove(){
    this.elementById.remove()
  }
}



// export default Component;

