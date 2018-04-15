import renderTemplate from "../modules/renderTemplate";
import header from "./layouts/header";
import title from "./layouts/title";
import player from "./layouts/player";


function getTemplateArtists(data) {
  let counter = 0;

  return data.slice(0, 3).map((curr) => {
    counter++;

    return (
      `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${counter}" name="answer" value="val-${counter}"/>
          <label class="main-answer" for="answer-${counter}">
            <img class="main-answer-preview" src="${curr.image}"
                 alt="${curr.artist}" width="134" height="134">
            ${curr.artist}
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
        ${title(`Кто исполняет эту песню?`)}
        ${player()}
        <form class="main-list">
          ${getTemplateArtists(artists)}
        </form>
      </div>
    </section>`
  );
};
