let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const stone_div = document.getElementById("stone");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
  const choice = ["stone", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

function translate(word) {
  if (word === "stone") return "Piedra";
  if (word === "paper") return "Papel";
  return "Tijera";
}

function win(user, computer) {
  let message = "";
  let smallUser = "vos".fontsize(3).sub();
  let smallComputer = "yo".fontsize(3).sub();
  let userChoiceDiv = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${translate(user)}${smallUser} gana a ${translate(
    computer
  )}${smallComputer}. Ganaste 🔥`;
  userChoiceDiv.classList.add("green-glow");
  setTimeout(() => {
    userChoiceDiv.classList.remove("green-glow");
  }, 300);
}

function lose(user, computer) {
  let message = "";
  let smallUser = "vos".fontsize(3).sub();
  let smallComputer = "yo".fontsize(3).sub();
  let userChoiceDiv = document.getElementById(user);

  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${translate(user)}${smallUser} pierde con ${translate(
    computer
  )}${smallComputer}. Perdiste ☠`;
  userChoiceDiv.classList.add("red-glow");
  setTimeout(() => {
    userChoiceDiv.classList.remove("red-glow");
  }, 300);
}

function draw(user, computer) {
  let message = "";
  let smallUser = "vos".fontsize(3).sub();
  let smallComputer = "yo".fontsize(3).sub();
  let userChoiceDiv = document.getElementById(user);

  result_p.innerHTML = `${translate(user)}${smallUser} igual que ${translate(
    computer
  )}${smallComputer}. Empate!!`;
  userChoiceDiv.classList.add("gray-glow");
  setTimeout(() => {
    userChoiceDiv.classList.remove("gray-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "stonescissor":
    case "paperstone":
    case "scissorpaper":
      win(userChoice, computerChoice);
      break;
    case "stonepaper":
    case "paperscissor":
    case "scissorstone":
      lose(userChoice, computerChoice);
      break;
    case "stonestone":
    case "paperpaper":
    case "scissorscissor":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  stone_div.addEventListener("click", () => {
    game("stone");
  });
  paper_div.addEventListener("click", () => {
    game("paper");
  });
  scissor_div.addEventListener("click", () => {
    game("scissor");
  });
}

main();
