import router from "./routes";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);

const greenSheenColor = "green-sheen";
const slateGrayColor = "slate-gray";
const deepTaupeColor = "deep-taupe";
const blueMunsellColor = "blue-munsell";
const xiketicColor = "xiketic";

const $ = (selector) => document.querySelector(selector);
const $root = $("html");
const $greenSheenBtn = $(`.btn-color.${greenSheenColor}`);
const $slateGrayBtn = $(`.btn-color.${slateGrayColor}`);
const $deepTaupeBtn = $(`.btn-color.${deepTaupeColor}`);
const $blueMunsellBtn = $(`.btn-color.${blueMunsellColor}`);
const $xiketicBtn = $(`.btn-color.${xiketicColor}`);

let activeButton = $greenSheenBtn;
function setColor(btn, color) {
  activeButton.classList.toggle("active");
  btn.classList.toggle("active");
  $root.setAttribute("data-theme", color);

  activeButton = btn;
}

$greenSheenBtn.addEventListener("click", function () {
  setColor(this, greenSheenColor);
});

$slateGrayBtn.addEventListener("click", function () {
  setColor(this, slateGrayColor);
});

$deepTaupeBtn.addEventListener("click", function () {
  setColor(this, deepTaupeColor);
});

$blueMunsellBtn.addEventListener("click", function () {
  setColor(this, blueMunsellColor);
});

$xiketicBtn.addEventListener("click", function () {
  setColor(this, xiketicColor);
});
