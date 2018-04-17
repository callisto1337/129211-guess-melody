export default (option) => {
  return {
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
      description: `За 3 минуты и 25 секунд <br>вы&nbsp;набрали 12 баллов (8 быстрых) <br>совершив 3 ошибки`,
      place: `<span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>`
    }
  }[option];
};
