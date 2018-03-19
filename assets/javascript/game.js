
let wins = 0
let losses = 0
// let randomNum;
let jewel1= 3
let jewel2= 8
let jewel3= 10
let jewel4 = 1


// set const variables for html elements that need updating on browser
const winsElement = document.getElementById('wins')
const lossesElement = document.getElementById('losses')
const computerNumElement = document.getElementById('computerNum')
const scoreElement = document.getElementById('score')





// The random number shown at the start of the game should be between 19 - 120.
function setup(){

    let randomNum = Math.floor(Math.random() * ((120-19)+1) + 19);

    console.log(randomNum)

}


function jewel1(){
    let randomNum = Math.floor(Math.random() * 12 + 1);

    console.log(randomNum)

}

function jewel2(){
    let randomNum = Math.floor(Math.random() * 12 + 1);

    console.log(randomNum)

}

function jewel3(){
    let randomNum = Math.floor(Math.random() * 12 + 1);

    console.log(randomNum)

}

function jewel4(){
    let randomNum = Math.floor(Math.random() * 12 + 1);

    console.log(randomNum)

}


