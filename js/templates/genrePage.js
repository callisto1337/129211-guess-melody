import renderTemplate from "../modules/renderTemplate";
import header from "./layouts/header";
import tracks from "./layouts/tracks";

export default function mainGenre() {
  return renderTemplate(`
    <section class="main main--level main--level-genre">
      ${header()}
      <div class="main-wrap">
        <h2 class="title">Выберите инди-рок треки</h2>
        <form class="genre">
           ${tracks()}
          <button class="genre-answer-send" type="submit" disabled>Ответить</button>
        </form>
      </div>
    </section>`
  );
}
