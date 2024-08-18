let playerScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".option");
const message = document.querySelector("#message");

const playerScoreElement = document.querySelector("#user-score");
const computerScoreElement = document.querySelector("#comp-score");

const generateComputerChoice = () => {
  const choicesArray = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choicesArray[randomIndex];
};

const declareDraw = () => {
  message.innerText = "It's a Draw! Try again.";
  message.style.backgroundColor = "#081b31";
};

const announceResult = (playerWon, playerChoice, computerChoice) => {
  if (playerWon) {
    playerScore++;
    playerScoreElement.innerText = playerScore;
    message.innerText = `You win! Your ${playerChoice} beats ${computerChoice}`;
    message.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScoreElement.innerText = computerScore;
    message.innerText = `You lost. ${computerChoice} beats your ${playerChoice}`;
    message.style.backgroundColor = "red";
  }
};

const initiateGame = (playerChoice) => {
  const computerChoice = generateComputerChoice();

  if (playerChoice === computerChoice) {
    declareDraw();
  } else {
    let playerWins = true;
    if (playerChoice === "rock") {
      playerWins = computerChoice === "paper" ? false : true;
    } else if (playerChoice === "paper") {
      playerWins = computerChoice === "scissors" ? false : true;
    } else {
      playerWins = computerChoice === "rock" ? false : true;
    }
    announceResult(playerWins, playerChoice, computerChoice);
  }
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const playerChoice = option.getAttribute("id");
    initiateGame(playerChoice);
  });
});
