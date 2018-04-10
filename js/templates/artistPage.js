import renderTemplate from "../modules/renderTemplate";

export default function mainArtist() {
  const artists = [
    {
      name: `Пелагея`,
      photo: `http://placehold.it/134x134`
    },
    {
      name: `Краснознаменная дивизия имени моей бабушки`,
      photo: `http://placehold.it/134x134`
    },
    {
      name: `Lorde`,
      photo: `http://placehold.it/134x134`
    }
  ];

  function getTemplateArtists(artistsData) {
    let counter = 0;

    return artistsData.map((curr) => {
      counter++;

      return (
        `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${counter}" name="answer" value="val-${counter}"/>
          <label class="main-answer" for="answer-${counter}">
            <img class="main-answer-preview" src="${curr.photo}"
                 alt="Пелагея" width="134" height="134">
            ${curr.name}
          </label>
        </div>`
      );
    });
  }

  return renderTemplate(`
    <!-- Игра на выбор исполнителя -->
    <section class="main main--level main--level-artist">
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
  
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">05</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">00</span>
        </div>
      </svg>
      <div class="main-mistakes">
        <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
        <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
      </div>
  
      <div class="main-wrap">
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
          ${getTemplateArtists(artists)}
        </form>
      </div>
    </section>`
  );
}
