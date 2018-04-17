import welcomePage from './templates/welcomePage';
import artistPage from './templates/artistPage';
import genrePage from './templates/genrePage';
import resultPage from './templates/resultPage';
import showPage from './modules/showPage';
import gameResult from './modules/gameResult';
import calculateScore from './modules/calculateScore';

import artists from './data/artists';

let currentGame = {
  data: [],
  notes: 3,
  stats: 0,
  scores: 0
};
const artistVariants = (count) => {
  const randomNumber = Math.round(Math.random() * 2);
  return artists.slice(randomNumber, randomNumber + count);
};
const rightArtist = () => {
  return Math.round(Math.random() * 2);
};


// Главная страница при загрузке
showPage(welcomePage());

// Конец игры
const endGame = () => {
  currentGame.scores = calculateScore(currentGame.data);
  showPage(resultPage(gameResult([], currentGame)));
  currentGame = {
    data: [],
    notes: 3,
    stats: 0
  };

  // Сыграть еще раз
  document.querySelector(`.main-replay`).onclick = () => {
    showPage(welcomePage());
  };
};

document.querySelector(`.main`).onclick = function (e) {
  // Начать игру
  if (e.target.className === `main-play`) {
    showPage(artistPage(artistVariants(3), currentGame.notes, rightArtist()));
  }

  if (e.target.parentNode.className === `main-answer-wrapper`) {
    const rightAnswer = e.target.id === `answer-${rightArtist() + 1}`;

    currentGame.data.push({
      status: rightAnswer,
      time: 10000
    });

    if (!rightAnswer) {
      currentGame.notes -= 1;
    }

    if (currentGame.notes < 1) {
      endGame();
      return;
    }

    if (currentGame.data.length < 10) {
      showPage(artistPage(artistVariants(3), currentGame.notes, rightArtist()));
    } else {
      // Игра на выбор жанра
      showPage(genrePage(artistVariants(4)));

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

      document.querySelector(`.genre-answer-send`).onclick = () => {
        endGame();
      };
    }
  }
};
