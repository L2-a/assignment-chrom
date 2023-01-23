//form variable
const userLength = document.querySelector(".user-length");
const guessNumber = document.querySelector(".guess-number");

//input variable
const userLengthInput = document.querySelector("#generate-number");
const userGuess = document.querySelector("#user-guess");

//h3 variable
const choseResult = document.querySelector(".chose-result");
const gameResult = document.querySelector(".game-result");

//String variable
const HIDDEN = "hidden";

//function
function game(event) {
  event.preventDefault();
  const length = userLengthInput.value;
  const guess = userGuess.value;
  localStorage.setItem(length, length);
  localStorage.setItem(guess, guess);
  const range = localStorage.getItem(length);
  const select = localStorage.getItem(guess);
  const random = Math.ceil(Math.random() * range);
  choseResult.classList.remove(HIDDEN);
  choseResult.innerText = `You chose: ${select}, the machine chose: ${random}`;
  const guessValue = Number(select);
  judge(guessValue, random);
}

function judge(guessValue, random) {
  if (guessValue === random) {
    choseResult.classList.remove(HIDDEN);
    gameResult.classList.remove(HIDDEN);
    gameResult.innerText = `You win:)!`;
  } else {
    choseResult.classList.remove(HIDDEN);
    gameResult.classList.remove(HIDDEN);
    gameResult.innerText = `You lose :(`;
  }
}
//EventListener
userLength.addEventListener("submit", game);
guessNumber.addEventListener("submit", game);
