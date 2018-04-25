export default (data, notes) => {
  if (data.length < 10 || notes === 0) {
    return -1;
  }

  return data.reduce((prev, curr) => {
    const pointValue = curr.time < 30000 ? 1 : 2;

    return curr.status ? prev + pointValue : prev - 2;
  }, 0);
};
