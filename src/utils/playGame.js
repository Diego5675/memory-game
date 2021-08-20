const playGame = () => {
  const $cards = document.querySelectorAll(".memory-card");
  const $playBtn = document.querySelector("#play");

  let hasFlippedCard = false;
  let lockBoard = true;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;

      return;
    }

    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
  }

  function checkForMatch() {
    const isMatch =
      firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffleBoard() {
    $cards.forEach((card) => {
      const randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

  const startGame = () => {
    lockBoard = false;
  };

  $playBtn.addEventListener("click", startGame);

  $cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });
};

export default playGame;
