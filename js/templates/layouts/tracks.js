import player from "./player";

export default () => {
  return (
    `<div class="genre-answer">
      ${player()}
      <input type="checkbox" name="answer" value="answer-1" id="a-1">
      <label class="genre-answer-check" for="a-1"></label>
    </div>

    <div class="genre-answer">
      ${player()}
      <input type="checkbox" name="answer" value="answer-1" id="a-2">
      <label class="genre-answer-check" for="a-2"></label>
    </div>

    <div class="genre-answer">
      ${player()}
      <input type="checkbox" name="answer" value="answer-1" id="a-3">
      <label class="genre-answer-check" for="a-3"></label>
    </div>

    <div class="genre-answer">
      ${player()}
      <input type="checkbox" name="answer" value="answer-1" id="a-4">
      <label class="genre-answer-check" for="a-4"></label>
    </div>`
  );
};
