import AbstractView from '../abstractView';
import ResultPage from './resultPage';
import header from "./layouts/header";
import title from "./layouts/title";
import genreSelect from "./layouts/genreSelect";
import artistVariants from "../modules/artistVariants";
import showPage from '../modules/showPage';
import gameResult from '../modules/gameResult';
import calculateScore from "../modules/calculateScore";


function getTemplateSelects(data) {
  let counter = 0;
  let result = ``;

  data.forEach(() => {
    counter++;
    result += `${genreSelect(counter)}`;
  });

  return result;
}

export default class GenrePage extends AbstractView {
  constructor(data) {
    super();
    this.currentGame = data;
    return this.element;
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        ${header()}
        <div class="main-wrap">
          ${title(`Выберите инди-рок треки`)}
          <form class="genre">
            ${getTemplateSelects(artistVariants(4))}
            <button class="genre-answer-send" type="submit" disabled>Ответить</button>
          </form>
        </div>
      </section>`;
  }

  events() {
    const checkboxAnswer = this._element.querySelectorAll(`.genre-answer input`);

    for (const item of checkboxAnswer) {
      item.onclick = function () {
        const btnSend = document.querySelector(`.genre-answer-send`);

        if (document.querySelector(`.genre-answer input:checked`)) {
          btnSend.disabled = false;
          return;
        }

        btnSend.disabled = true;
      };
    }

    this._element.querySelector(`.genre-answer-send`).onclick = (e) => {
      e.preventDefault();
      showPage(new ResultPage(gameResult([2, 3, 4, 12], {
        score: calculateScore(this.currentGame.data, this.currentGame.notes),
        notes: this.currentGame.notes,
        time: this.currentGame.time
      })));
    };
  }
}
