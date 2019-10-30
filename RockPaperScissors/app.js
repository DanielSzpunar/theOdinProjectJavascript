/*
//Create prompt window
let userChoice = window.prompt("What is your choice?")
//Convert to lowercase
let lowerCaseUserChoice = userChoice.toLowerCase();

*/
/*
let randomNumber = Math.random();
console.log(randomNumber)
let computerChoice = "";
if (randomNumber < 0.333) {
    computerChoice = "rock"
} else if (randomNumber > 0.333 && randomNumber < 0.666) {
    computerChoice = "paper"
} else computerChoice = "scissors"
console.log(computerChoice)
*/

//function to determine computers choice.
let computerChoice = () => {
    let randomNumber = Math.random();
let computerChoice = "";
if (randomNumber < 0.333) {
    computerChoice = "rock"
} else if (randomNumber > 0.333 && randomNumber < 0.666) {
    computerChoice = "paper"
} else computerChoice = "scissors"
    return computerChoice
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "tie"
    } else if ()
}

