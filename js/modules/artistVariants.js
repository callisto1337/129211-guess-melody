import artists from "../data/artists";

export default (count) => {
  const randomNumber = Math.round(Math.random() * 2);
  return artists.slice(randomNumber, randomNumber + count);
};
