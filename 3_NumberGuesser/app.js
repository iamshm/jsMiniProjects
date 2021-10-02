/*
Game fn
- player must guess a number between min n max
- player gets a certain amount of guess
- notify player of guess remaining
- notify the player of the correct answer if lost
- let player chose to play again or not
*/

// ui vars
let min = 15,
  max = 30,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;
// play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Enter a number between ${min} and ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct. Victory !`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //  game over lost
      // game continues - wrong answer
      gameOver(false, `Game over. ${winningNum} was the correct Number`);
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(
        `${guess} is incorrect, ${guessesLeft} guessess left only`,
        "red"
      );
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // Disable input
  guessInput.disabled = true;
  // guessBtn.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  // set msg
  setMessage(msg, color);
  // play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}
function getRandomNum(min, max) {
  const numb = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(numb);
  return numb;
}
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
