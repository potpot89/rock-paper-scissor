// prompt to initialize the game

const playerName = prompt(`Hello, what's your name?`).toLowerCase();
alert(`Nice to meet you ${playerName}`);

const playerChoice = prompt(
  `Let's play a game! Choose rock, paper or scissors`
).toLowerCase();

console.log({ playerChoice });

// player turn
function playerTurn() {
  if (playerChoice === `rock`) {
    return `${playerName} chose rock`;
  } else if (playerChoice === `paper`) {
    return `${playerName} chose paper`;
  } else {
    return `${playerName} chose scissors`;
  }
}
console.log(playerTurn());

//computer turn
function getComputerChoice(computerChoice) {
  Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return `rock`;
  } else if (computerChoice === 1) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

const computerChoice = getComputerChoice();
console.log(`Computer chose ${computerChoice}`);

//function that plays a round
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return `It's a tie!`;
  } else if (playerChoice === `rock` && computerChoice === `paper`) {
    return `You Lose! Paper beats rock!`;
  } else if (playerChoice === `paper` && computerChoice === `scissor`) {
    return `You Lose! Scissors beats paper!`;
  } else if (playerChoice === `scissors` && computerChoice === `rock`) {
    return `You Lose! Rock beats Scissors!`;
  } else `You win! ${playerChoice} beats ${computerChoice}`;
}

console.log(playRound());

//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

//Account for TIES by re-playing the round.

/*Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:
function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

//Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.

//You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.

//At this point you should be using console.log() to display the results of each round and the winner at the end.

//Use prompt() to get input from the user. Read the docs here if you need to.

//Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
//Feel free to create more “helper” functions if you think it would be useful.
