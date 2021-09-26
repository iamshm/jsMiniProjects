/*
Game fn
- player must guess a number between min n max
- player gets a certain amount of guess
- notify player of guess remaining
- notify the player of the correct answer if lost
- let player chose to play again or not
*/

// ui vars
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message")

minNum.textContent = min
maxNum.textContent = max

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value)
  console.log(guess)
})
