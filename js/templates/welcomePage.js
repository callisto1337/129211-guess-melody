import title from "./layouts/title";
import AbstractView from '../abstractView';
import showPage from '../modules/showPage';
import ArtistPage from './artistPage';


export default class WelcomePage extends AbstractView {
  constructor() {
    super();
    return this.element;
  }

  get template() {
    return `
      <section class="main main--welcome">
        <section class="logo" title="Угадай мелодию">
          <h1>Угадай мелодию</h1>
        </section>
        <button class="main-play">Начать игру</button>
        ${title(`Правила игры`)}
        <p class="text main-text">
          Правила просты — за 5 минут ответить на все вопросы.<br>
          Ошибиться можно 3 раза.<br>
          Удачи!
        </p>
      </section>`;
  }

  events() {
    const btnStart = this._element.querySelector(`.main-play`);

    btnStart.addEventListener(`click`, () => {
      showPage(new ArtistPage());
    });
  }
}
