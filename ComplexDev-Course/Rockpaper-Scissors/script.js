let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// if (!score) {
//   score = {
//     wins : 0,
//     losses: 0,
//     ties: 0
//   }
// }

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickMachineMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

function playGame(playerMove) {
  const machineMove = pickMachineMove();

  let result = "";

  if (playerMove === "Scissors") {
    if (machineMove === "Rock") {
      result = "You Lose";
    } else if (machineMove === "Paper") {
      result = "You Win";
    } else if (machineMove === "Scissors") {
      result = "Tie";
    }
  } else if (playerMove === "Paper") {
    if (machineMove === "Rock") {
      result = "You Win";
    } else if (machineMove === "Paper") {
      result = "Tie";
    } else if (machineMove === "Scissors") {
      result = "You Lose";
    }
  } else if (playerMove === "Rock") {
    if (machineMove === "Rock") {
      result = "Tie";
    } else if (machineMove === "Paper") {
      result = "You Lose";
    } else if (machineMove === "Scissors") {
      result = "You Win";
    }
  }

  if (result === "You Win") {
    score.wins += 1;
  } else if (result === "You Lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = `${result}`;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You ${playerMove} - ${machineMove} Machine`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickMachineMove() {
  const randomNumber = Math.random();

  let machineMove;
  // let figure = ""
  // Rock

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    machineMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    machineMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    machineMove = "Scissors";
  }

  return machineMove;
}
