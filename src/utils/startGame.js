const startGame = (numOfCards) => {
  const $cards = document.querySelectorAll(".memory-card");
  const $actionsSec = document.querySelector(".actions");
  const $playBtn = document.querySelector("#play");
  const $backBtn = document.querySelector("#back-button");
  const $counter = document.createElement("div");
  const $seconds = document.createElement("p");
  const $minutes = document.createElement("p");
  const $hours = document.createElement("p");

  let hasFlippedCard = false;
  let lockBoard = false;
  let matches = 0;
  let firstCard, secondCard;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let intervalID;

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
    matches++;

    const gameOver = matches === numOfCards;
    gameOver ? finishGame() : null;

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

  function finishGame() {
    clearInterval(intervalID);
    $playBtn.style.display = "initial";
    $actionsSec.removeChild($counter);

    swal({
      title: "Congrats!",
      text: `Your time: ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
      icon: "success",
    });
  }

  function incrementTime() {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }

    $seconds.textContent = seconds < 10 ? `0${seconds}s` : `${seconds}s`;
    $minutes.textContent = minutes < 10 ? `0${minutes}m` : `${minutes}m`;
    $hours.textContent = hours < 10 ? `0${hours}h` : `${hours}h`;
  }

  (function setTimer() {
    $counter.setAttribute("class", "counter");
    $seconds.setAttribute("class", "seconds");
    $minutes.setAttribute("class", "minutes");
    $hours.setAttribute("class", "hours");

    $seconds.textContent = "00s";
    $minutes.textContent = "00m";
    $hours.textContent = "00h";

    $playBtn.style.display = "none";
    $counter.append($hours, $minutes, $seconds);
    $actionsSec.append($counter);

    intervalID = setInterval(incrementTime, 1000);
  })();

  (function shuffleBoard() {
    $cards.forEach((card) => {
      const randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

  $cards.forEach((card) => {
    card.classList.remove("flip");
    card.addEventListener("click", flipCard);
  });

  $backBtn.addEventListener("click", () => {
    clearInterval(intervalID);
  });
};

export default startGame;
