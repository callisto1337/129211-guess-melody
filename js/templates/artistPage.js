import AbstractView from '../abstractView';
import GenrePage from './genrePage';
import ResultPage from './resultPage';
import showPage from '../modules/showPage';

import artistVariants from "../modules/artistVariants";
import artists from "../data/artists";
import header from "./layouts/header";
import player from "./layouts/player";
import title from "./layouts/title";
import gameResult from "../modules/gameResult";
import calculateScore from "../modules/calculateScore";


const rightArtist = () => Math.round(Math.random() * 2);
let currentGame = {
  data: [],
  notes: 3,
  stats: 0,
  scores: 0,
  time: 10000
};

function getTemplateArtists(data) {
  let counter = 0;
  let result = ``;

  data.forEach((curr) => {
    counter += 1;
    result += `
      <div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${counter}" name="answer" value="val-${counter}"/>
        <label class="main-answer" for="answer-${counter}">
          <img class="main-answer-preview" src="${curr.image}"
               alt="${curr.artist}" width="134" height="134">
          ${curr.artist}
        </label>
      </div>`;
  });

  return result;
}

export default class ArtistPage extends AbstractView {
  constructor() {
    super();
    this.rigthArtist = rightArtist() + 1;
    return this.element;
  }

  get template() {
    return `
      <section class="main main--level main--level-artist">
        ${header(currentGame.notes)}
        <div class="main-wrap">
          ${title(`Кто исполняет эту песню?`)}
          ${player(artists[this.rigthArtist].src)}
          <form class="main-list">
            ${getTemplateArtists(artistVariants(3))}
          </form>
        </div>
      </section>`;
  }

  events() {
    const listener = (e) => {
      const btnAnswer = e.target.classList.contains(`main-answer-r`);
      const answerStatus = e.target.id === `answer-${this.rigthArtist}`;

      if (btnAnswer) {
        document.removeEventListener(`click`, listener);

        currentGame.data.push({
          status: answerStatus,
          time: 10000
        });

        if (!answerStatus) {
          currentGame.notes -= 1;
        }

        if (currentGame.notes < 1) {
          showPage(new ResultPage(gameResult([2, 3, 5, 12], {
            score: calculateScore(currentGame.data, currentGame.notes),
            notes: currentGame.notes,
            time: 10000
          })));
          currentGame = {
            data: [],
            notes: 3,
            stats: 0,
            scores: 0
          };
          return;
        }

        if (currentGame.data.length < 10) {
          showPage(new ArtistPage());
          return;
        }

        showPage(new GenrePage(currentGame));
      }
    };

    document.addEventListener(`click`, listener);
  }
}
