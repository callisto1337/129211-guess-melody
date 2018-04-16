import renderTemplate from "../modules/renderTemplate";
import title from "./layouts/title";


export default () => {
  return renderTemplate(`
    <section class="main main--welcome">
      <section class="logo" title="Угадай мелодию">
        <h1>Угадай мелодию</h1>
      </section>
      <button class="main-play">Начать игру</button>
      ${title(`Правила игры`)}
      <p class="text main-text">
        Правила просты — за 5 минут ответить на все вопросы.<br>
        Ошибиться можно 3 раза.<br>
        Удачи!
      </p>
    </section>`
  );
};
