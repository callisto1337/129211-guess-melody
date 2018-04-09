export default function returnResult(results, userResults) {
  if (userResults.notes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  if (userResults.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  results.push(userResults.score);
  results.sort((a, b) => {
    return b - a;
  });

  const place = results.lastIndexOf(userResults.score) + 1;
  const playersCount = results.length;

  const percent = (playersCount - place) / playersCount;
  const formattedPercent = percent.toString().slice(2, 4);

  return `Вы заняли ${place} место из ${results.length} игроков. Это лучше, чем у ${formattedPercent || 100}% игроков`;
}
