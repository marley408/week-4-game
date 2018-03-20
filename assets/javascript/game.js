
let wins = 0
let losses = 0
let randomNum;
let blueNum = 0;
let greenNum = 0;
let redNum = 0;
let yellowNum = 0;
let userScore;

// set const variables for html elements that need updating on browser
const winsElement = $('#wins')
const lossesElement = $('#losses')
const computerNumElement = $('#computerNum')
const scoreElement = $('#score')


// The random number shown at the start of the game should be between 19 - 120.
function setup(){
    scoreElement.text(0);
    randomNum = Math.floor(Math.random() * ((120-19)+1) + 19);

    blueNum = randNum();
    greenNum = randNum();
    redNum = randNum();
    yellowNum = randNum();
    userScore = 0;

    console.log({ 
        randomNum: randomNum, 
        blueNum: blueNum, 
        greenNum: greenNum, 
        redNum: redNum, 
        yellowNum: yellowNum, 
        userScore: userScore
    });

    computerNumElement.text(randomNum);

}

setup()

function checkScore(score){
    if (score > randomNum){
        losses++;
        lossesElement.text(losses);
        setup();
    } else if (score === randomNum){
        wins++;
        winsElement.text(wins);
        setup();
    }
}

function handleScore(num) {
    userScore = userScore + num;
    scoreElement.text(userScore);
    checkScore(userScore);
}

// here a number is picked for each crystal
function randNum(){
    return Math.floor(Math.random() * 12 + 1);
}

function handleBlueCrystalScore() {
    handleScore(blueNum);
}
function handleGreenCrystalScore() {
    handleScore(greenNum);
}
function handleRedCrystalScore() {
    handleScore(redNum);
}
function handleYellowCrystalScore() {
    handleScore(yellowNum);
}


// game function. player must use amount assigned to each crystal to match the random number. total score so far is added to score box. match = increase to win count. If userScore > randomNum, then increase to loss count. Restart after each win/loss

$(document).ready(function() {
    $('#crystal1').on('click', handleBlueCrystalScore);
    $('#crystal2').on('click', handleGreenCrystalScore);
    $('#crystal3').on('click', handleRedCrystalScore);
    $('#crystal4').on('click', handleYellowCrystalScore);
});
