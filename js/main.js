import welcomePage from './templates/welcomePage';
import artistPage from './templates/artistPage';
import genrePage from './templates/genrePage';
import resultPage from './templates/resultPage';
import showPage from './modules/showPage';

import artists from './data/artists';

// Главная страница при загрузке
showPage(welcomePage());

document.querySelector(`.main`).onclick = function (e) {
  // Начать игру
  if (e.target.className === `main-play`) {
    showPage(artistPage(artists));
  }

  // Выбрать исполнителя
  if (e.target.parentNode.className === `main-answer-wrapper`) {
    showPage(genrePage());

    const checkboxAnswer = document.querySelectorAll(`.genre-answer input`);

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
  }

  // Страница с результатом
  if (e.target.className === `genre-answer-send`) {
    const results = [
      `timeUp`,
      `endAttempts`,
      `win`
    ];

    showPage(resultPage(results[Math.floor(Math.random() + 2)]));
  }

  // Сыграть еще раз
  if (e.target.className === `main-replay`) {
    showPage(welcomePage());
  }
};
