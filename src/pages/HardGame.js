import createCards from "../utils/createCards";
import playGame from "../utils/playGame";

const HardGame = () => {
  const $root = document.querySelector("html");
  $root.setAttribute("data-difficulty", "hard");

  const view = `
    <section class="memory-game">${createCards(20)}</section>
    <section class='actions'>
      <button id='play' class="btn-action">Play</button>
      <a href="#" class="btn-action">Back</a>
    </section>
  `;

  setTimeout(() => {
    playGame();
  }, 0);

  return view;
};

export default HardGame;
