import renderTemplate from "../modules/renderTemplate";

export default function mainResult(option) {
  if (option === 0) {
    return renderTemplate(`
      <!-- Результат игры: проигрыш время вышло -->
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

        <h2 class="title">Увы и ах!</h2>
        <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
      </section>
    `);
  } else if (option === 1) {
    return renderTemplate(`
      <!-- Результат игры: проигрыш закончились попытки -->
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

        <h2 class="title">Какая жалость!</h2>
        <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
      </section>
    `);
  } else {
    return renderTemplate(`
      <!-- Результат игры: выигрыш -->
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
          <br>вы&nbsp;набрали 12 баллов (8 быстрых)
          <br>совершив 3 ошибки</div>
        <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>
    `);
  }
}
