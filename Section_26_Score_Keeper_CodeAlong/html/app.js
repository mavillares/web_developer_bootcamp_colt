let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

const p1ScoreSpan = document.querySelector("#p1Score");
const p2ScoreSpan = document.querySelector("#p2Score");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

p1Button.addEventListener("click", function (e) {
  if (!isGameOver) {
    p1Score++;
    if (winningScore === p1Score) {
      isGameOver = true;
      p1ScoreSpan.classList.add("has-text-success");
      p2ScoreSpan.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1ScoreSpan.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function (e) {
  if (!isGameOver) {
    p2Score++;
    if (winningScore === p2Score) {
      isGameOver = true;
      p2ScoreSpan.classList.add("has-text-success");
      p1ScoreSpan.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2ScoreSpan.textContent = p2Score;
  }
});
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1ScoreSpan.textContent = 0;
  p2ScoreSpan.textContent = 0;
  p1ScoreSpan.classList.remove("has-text-success", "has-text-danger");
  p2ScoreSpan.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
