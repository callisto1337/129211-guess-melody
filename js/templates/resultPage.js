import AbstractView from '../abstractView';
import title from './layouts/title';
import showPage from "../modules/showPage";
import WelcomePage from "./welcomePage";

export default class ResultPage extends AbstractView {
  constructor(data) {
    super();
    this.result = data;
    return this.element;
  }

  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        ${title(this.result.title)}
        <div class="main-stat">${this.result.description}</div>
        <span class="main-comparison">${this.result.stats || ``}</span>
        <span role="button" tabindex="0" class="main-replay">${this.result.stats ? `Сыграть ещё раз` : `Попробовать ещё раз`}</span>
      </section>`;
  }

  events() {
    const btnReplay = this._element.querySelector(`.main-replay`);

    btnReplay.addEventListener(`click`, () => {
      showPage(new WelcomePage());
    });
  }
}
