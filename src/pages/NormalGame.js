import createCards from "../utils/createCards";
import playGame from "../utils/playGame";

const NormalGame = () => {
  const $root = document.querySelector("html");
  $root.setAttribute("data-difficulty", "normal");

  const view = `
    <section class="memory-game">${createCards(10)}</section>
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

export default NormalGame;
