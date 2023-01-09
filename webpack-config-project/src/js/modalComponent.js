import {Component} from "./Componet";


export class Input extends Component {
    constructor(userData){
      super(userData);
    }
    render(elementData, parent) {
      super.render(elementData, parent);
      const label = document.createElement('label');
      label.setAttribute('for', elementData.id);
      label.textContent = elementData.label;
      this.elementById.before(label)
    }
}

export class Select extends Component{
  constructor(userData){
    super(userData);
  }
  render(elementData, parent) {
    super.render(elementData, parent);
    let options = elementData.options;
    options.forEach(el=>{ 
      const option = document.createElement('option');
      option.value = el.value;
      option.textContent = el.text;
      option.selected = el.selected;
      this.elementById.append(option);
    })
  }
}

export class Button extends Component{
  constructor(userData){
    super(userData);
  }
  render(elementData, parent) {
    super.render(elementData, parent);
    if (this.elementData.content) {
      this.elementById.textContent = this.elementData.content;
    }
  }
}

export class Text extends Component{
  constructor(userData){
      super(userData)
  }
  render(elementData, parent) {
    super.render(elementData, parent);
  }
}
