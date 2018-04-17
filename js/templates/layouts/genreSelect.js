import player from "./player";


export default (counter = 4) => {
  return (
    `<div class="genre-answer">
      ${player()}
      <input type="checkbox" name="answer" value="answer-${counter}" id="a-${counter}">
      <label class="genre-answer-check" for="a-${counter}"></label>
    </div>`
  );
};
