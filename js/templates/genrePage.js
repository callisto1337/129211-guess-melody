import renderTemplate from "../modules/renderTemplate";
import header from "./layouts/header";
import title from "./layouts/title";


export default () => {
  return renderTemplate(`
    <section class="main main--level main--level-genre">
      ${header()}
      <div class="main-wrap">
        ${title(`Выберите инди-рок треки`)}
        <form class="genre">
          <div class="genre-answer">
            <div class="player-wrapper">
              <div class="player">
                <audio></audio>
                <button class="player-control player-control--pause"></button>
                <div class="player-track">
                  <span class="player-status"></span>
                </div>
              </div>
            </div>
            <input type="checkbox" name="answer" value="answer-1" id="a-1">
            <label class="genre-answer-check" for="a-1"></label>
          </div>
          <div class="genre-answer">
            <div class="player-wrapper">
              <div class="player">
                <audio></audio>
                <button class="player-control player-control--pause"></button>
                <div class="player-track">
                  <span class="player-status"></span>
                </div>
              </div>
            </div>
            <input type="checkbox" name="answer" value="answer-2" id="a-2">
            <label class="genre-answer-check" for="a-2"></label>
          </div>
          <div class="genre-answer">
            <div class="player-wrapper">
              <div class="player">
                <audio></audio>
                <button class="player-control player-control--pause"></button>
                <div class="player-track">
                  <span class="player-status"></span>
                </div>
              </div>
            </div>
            <input type="checkbox" name="answer" value="answer-3" id="a-3">
            <label class="genre-answer-check" for="a-3"></label>
          </div>
          <div class="genre-answer">
            <div class="player-wrapper">
              <div class="player">
                <audio></audio>
                <button class="player-control player-control--pause"></button>
                <div class="player-track">
                  <span class="player-status"></span>
                </div>
              </div>
            </div>
            <input type="checkbox" name="answer" value="answer-4" id="a-4">
            <label class="genre-answer-check" for="a-4"></label>
          </div>
          <button class="genre-answer-send" type="submit" disabled>Ответить</button>
        </form>
      </div>
    </section>`
  );
};
