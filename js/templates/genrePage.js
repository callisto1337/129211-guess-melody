import renderTemplate from "../modules/renderTemplate";
import header from "./layouts/header";
import title from "./layouts/title";
import genreSelect from "./layouts/genreSelect";


function getTemplateSelects(data) {
  let counter = 0;
  let result = ``;

  data.forEach(() => {
    counter++;
    result += `${genreSelect(counter)}`;
  });

  return result;
}

export default (data) => {
  return renderTemplate(`
    <section class="main main--level main--level-genre">
      ${header()}
      <div class="main-wrap">
        ${title(`Выберите инди-рок треки`)}
        <form class="genre">
          ${getTemplateSelects(data)}
          <button class="genre-answer-send" type="submit" disabled>Ответить</button>
        </form>
      </div>
    </section>`
  );
};
