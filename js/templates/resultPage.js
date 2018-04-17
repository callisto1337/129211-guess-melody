import renderTemplate from "../modules/renderTemplate";
import title from './layouts/title';


export default (option) => {
  const result = option;

  return renderTemplate(`
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      ${title(result.title)}
      <div class="main-stat">${result.description}</div>
      <span class="main-comparison">${result.stats || ``}</span>
      <span role="button" tabindex="0" class="main-replay">${option === `win` ? `Сыграть ещё раз` : `Попробовать ещё раз`}</span>
    </section>
  `);
};
