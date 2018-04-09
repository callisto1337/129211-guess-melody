export default function calculateScore(data, notes) {
  if (data.length < 10 || notes === 0) {
    return -1;
  }

  let score = 0;

  data.map((item) => {
    if (item.status === false) {
      score -= 2;
      return;
    }

    score += item.time >= 30000 ? 2 : 1;
  });

  return score;
}
