import renderTemplate from "../modules/renderTemplate";
import header from "./layouts/header";
import player from "./layouts/player";

function getTemplateArtists(data) {
  let counter = 0;

  return data.map((curr) => {
    counter++;
    return (
      `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${counter}" name="answer" value="val-${counter}"/>
          <label class="main-answer" for="answer-${counter}">
            <img class="main-answer-preview" src="${curr.photo}"
                 alt="${curr.name}" width="134" height="134">
            ${curr.name}
          </label>
        </div>`
    );
  });
}

export default (artists) => {
  return renderTemplate(`
    <section class="main main--level main--level-artist">
      ${header()}
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
};
