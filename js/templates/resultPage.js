import renderTemplate from "../modules/renderTemplate";
// import resultData from '../data/result';
import title from './layouts/title';


export default function mainResult(option) {
  const result = option;

  return renderTemplate(`
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      ${title(result.title)}
      <div class="main-stat">${result.stats}</div>
      <span class="main-comparison">${result.description}</span>
      <span role="button" tabindex="0" class="main-replay">${option === `win` ? `Сыграть ещё раз` : `Попробовать ещё раз`}</span>
    </section>
  `);
}
