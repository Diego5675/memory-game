const createCards = (numOfCards) => {
  let $board = "";

  for (let i = 1; i <= numOfCards; i++) {
    const $card = `
      <div class="memory-card" data-framework="tlou-${i}">
         <img src="./images/tlou${i}.jpg" alt="tlou-${i}" class="front-face">
         <img src="./images/firefly.png" alt="Firefly" class="back-face">
      </div>
      <div class="memory-card" data-framework="tlou-${i}">
         <img src="./images/tlou${i}.jpg" alt="tlou-${i}" class="front-face">
         <img src="./images/firefly.png" alt="Firefly" class="back-face">
      </div>
   `;

    $board = $board + $card;
  }

  return $board;
};

export default createCards;
