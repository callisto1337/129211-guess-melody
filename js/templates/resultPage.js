import renderTemplate from "../modules/renderTemplate";

export default function mainResult(option = `win`) {
  const result = {
    'timeUp': {
      title: `Увы и ах!`,
      description: `Время вышло!<br>Вы не успели отгадать все мелодии`
    },
    'endAttempts': {
      title: `Какая жалость!`,
      description: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`
    },
    'win': {
      title: `Вы настоящий меломан!`,
      description: `За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
        <br>вы&nbsp;набрали 12 баллов (8 быстрых)
        <br>совершив 3 ошибки</div>`,
      place: `<span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>`
    }
  }[option];

  return renderTemplate(`
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  
      <h2 class="title">${result[`title`]}</h2>
      <div class="main-stat">${result[`description`]}</div>
      ${result[`place`] || ``}
      <span role="button" tabindex="0" class="main-replay">${option === `win` ? `Сыграть ещё раз` : `Попробовать ещё раз`}</span>
    </section>
  `);
}
