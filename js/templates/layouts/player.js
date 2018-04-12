export default () => {
  return (
    `<div class="player-wrapper">
      <div class="player">
        <audio></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>`
  );
};
