import renderTemplate from "../modules/renderTemplate";
import header from "./layouts/header";
import artists from "./layouts/artists";
import player from "./layouts/player";

export default () => {
  return renderTemplate(`
    <section class="main main--level main--level-artist">
      ${header()}
      <div class="main-wrap">
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        ${player()}
        <form class="main-list">${artists()}</form>
      </div>
    </section>`
  );
};
