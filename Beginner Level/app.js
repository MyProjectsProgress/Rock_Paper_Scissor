const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    // console.log(randomNumber);

    if (randomNumber === 1) {

        computerChoice = 'rock'
        computerChoiceDisplay.innerHTML = computerChoice

    } else if (randomNumber === 2) {

        computerChoice = 'paper'
        computerChoiceDisplay.innerHTML = computerChoice

    } else {

        computerChoice = 'scissor'
        computerChoiceDisplay.innerHTML = computerChoice
    }
};

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its A Draw';
        resultDisplay.innerHTML = result;
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win :)';
        resultDisplay.innerHTML = result;
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lose :(';
        resultDisplay.innerHTML = result;
    } else if (computerChoice === 'paper' && userChoice === 'scissor') {
        result = 'You Win :)';
        resultDisplay.innerHTML = result;
    } else if (computerChoice === 'scissor' && userChoice === 'paper') {
        result = 'You Lose :(';
        resultDisplay.innerHTML = result;
    } else if (computerChoice === 'rock' && userChoice === 'scissor') {
        result = 'You Lose :(';
        resultDisplay.innerHTML = result;
    } else if (computerChoice === 'scissor' && userChoice === 'rock') {
        result = 'You Win :)';
        resultDisplay.innerHTML = result;
    }
};