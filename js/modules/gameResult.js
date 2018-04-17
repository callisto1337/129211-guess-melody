export default (results, userResults) => {
  if (userResults.notes === 0) {
    return {
      data: null,
      title: `Какая жалость!`,
      description: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`
    };
  }
  if (userResults.time === 0) {
    return {
      data: null,
      title: `Увы и ах!`,
      description: `Время вышло!<br>Вы не успели отгадать все мелодии`
    };
  }

  results = [userResults.score].concat(results).sort((a, b) => {
    return b - a;
  });

  const place = results.lastIndexOf(userResults.score) + 1;
  const playersCount = results.length;
  const percent = (playersCount - place) / playersCount;
  const formattedPercent = percent.toString().slice(2, 4) || `100`;
  const scores = userResults.scores;
  const mistakes = {
    3: `0 ошибок`,
    2: `1 ошибку`,
    1: `2 ошибки`
  }[userResults.notes];

  return {
    data: {
      place,
      playersCount,
      percent: formattedPercent,
    },
    title: `Вы настоящий меломан!`,
    description: `За&nbsp;3&nbsp;минуты и 25&nbsp;секунд <br>вы&nbsp;набрали ${scores} баллов (8 быстрых) <br>совершив ${mistakes}`,
    stats: `Вы заняли ${place} место из ${playersCount} игроков. Это лучше, чем у ${formattedPercent}% игроков`
  };
};
