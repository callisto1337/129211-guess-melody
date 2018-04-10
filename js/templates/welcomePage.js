import renderTemplate from "../modules/renderTemplate";

export default function showWelcomePage() {
  const time = 5;
  const mistakes = `3 раза`;

  return renderTemplate(`
    <section class="main main--welcome">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">
        Правила просты&nbsp;— за&nbsp;${time} минут ответить на все вопросы.<br>
        Ошибиться можно ${mistakes}.<br>
        Удачи!
      </p>
    </section>`
  );
}
