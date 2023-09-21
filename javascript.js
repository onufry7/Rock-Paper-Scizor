
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const resultIcon = document.querySelector(".resultIcon");
const computerImg = document.getElementById("computerImage");
const userImg = document.getElementById("userImage");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;
let resultColor;

// Czyszczenie tablicy
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('mousedown', (e) => {
    computerImg.style.backgroundImage = userImg.style.backgroundImage = generateUrlIcon('transparent');
    userChoiceDisplay.innerHTML = computerChoiceDisplay.innerHTML = 'OPIS';
    resultDisplay.innerHTML = 'WYNIK';
    resultIcon.style.color = "#eee";

}));

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.innerText;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    possibleChoice.disabled = true;
}));


function generateComputerChoice()
{
    const randomNumber = Math.floor( Math.random() * 3 ) + 1;

    if( randomNumber === 1 ) computerChoice = 'kamień';
    else if( randomNumber === 2 ) computerChoice = 'papier';
    else computerChoice = 'nożyce';

    computerChoiceDisplay.innerHTML = computerChoice;
}


function generateUrlIcon(name)
{
    switch (true)
    {
        case (name === "kamień"): name = "rock"; break;
        case (name === "papier"): name = "paper"; break;
        case (name === "nożyce"): name = "scissors"; break;
        default: name = 'transparent'; break;
    }

    let url = "svg/" + name + ".svg";
    return `url('${url}')`;
}


function getResult()
{
    computerChoice = computerChoice.toLowerCase();
    userChoice = userChoice.toLowerCase();

    switch (true)
    {
        case
        (computerChoice === 'nożyce' && userChoice === 'kamień') ||
        (computerChoice === 'papier' && userChoice === 'nożyce') ||
        (computerChoice === 'kamień' && userChoice === 'papier'):
            result = 'WYGRAŁEŚ';
            resultColor = 'green';
        break;

        case
        (computerChoice === 'nożyce' && userChoice === 'papier') ||
        (computerChoice === 'papier' && userChoice === 'kamień') ||
        (computerChoice === 'kamień' && userChoice === 'nożyce'):
            result = 'PRZEGRAŁEŚ';
            resultColor = 'red';
        break;

        case computerChoice === userChoice:
            result = 'REMIS';
            resultColor = 'yellow';
        break;

        default:
            result = '??!';
            resultColor = '#eee';
    }

    computerImg.style.backgroundImage = generateUrlIcon(computerChoice);
    userImg.style.backgroundImage = generateUrlIcon(userChoice);

    resultDisplay.innerHTML = result;
    resultIcon.style.color = resultColor;
    possibleChoice.disabled = false;
}