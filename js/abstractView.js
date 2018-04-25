export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instatiate AbstractView`);
    }
  }

  get template() {
   throw new Error(`Template is required!`);
  }

  render() {
    const element = document.createElement(`template`);
    element.innerHTML = this.template;
    return element.content;
  }

  events(element) {}

  get element() {
    this._element = this.render();
    this.events(this._element);
    return this._element;
  }
}
