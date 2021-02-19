var foods = [
	"pizza",
	"pasta",
	"rice",
	"soup",
	"sandwich",
	"chicken",
	"steak",
	"bananas",
	"oranges",
  "apples",
  "salad",
  "hamburger",
  "hotdog"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];

let gallows = {
  update: function(){
    fill(100);
    rect(0, 0, 20, 500);
    rect(0, 0, 300, 10);
    fill(145, 105, 44);
    rect(245, 0, 15, 60);
  }
}
let head = {
  update: function(){
    fill(255);
    circle(250, 100, 40);
  }
}
let body = {
  update: function(){
    fill(255);
    rect(235, 138, 30, 200);
  }
}
let leftarm = {
  update: function(){
    fill(255);
    rect(95, 175, 140, 10);
  }
}
let rightarm = {
  update: function(){
    fill(255);
    rect(265, 175, 140, 10);
  }
}
let leftleg = {
  update: function(){
    fill(255);
    rect(235, 335, 10, 140);
  }
}
let rightleg = {
  update: function(){
    fill(255);
    rect(255, 335, 10, 140);
  }
}



function setup(){
  createCanvas(500, 500);
  background(255);
}
function draw(){
gallows.update();
}

function randomWord() {
  answer = foods[Math.floor(Math.random() * foods.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        id='` + letter + `' onClick="handleGuess('` + letter + `')">
      ` + letter + `
      </button>
    `
    ).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('wordSelected').innerHTML = wordStatus;
  }
  
  function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
  }

function handleGuess(chosenLetter) {
  //update underscores with letters to show progress
  guessed.indexOf(chosenLetter) == -1 ? guessed.push(chosenLetter) : null;

  //button disabled when selected
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  //update guess amount
  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) == -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}
//hangman picture update function
function updateHangmanPicture() {
  if(mistakes == 0){
    clear();
  }
  if(mistakes == 1){
    head.update();
  }
  if(mistakes == 2){
    body.update();
  }
  if(mistakes == 3){
    leftarm.update();
  }
  if(mistakes == 4){
    rightarm.update();
  }
  if(mistakes == 5){
    leftleg.update();
  }
  if(mistakes == 6){
    rightleg.update();
  }
  
}
//check if word is filled out completely
function checkIfGameWon() {
  if (wordStatus == answer) {
    document.getElementById('keyboard').innerHTML = 'Congratulations, You Won!';
  }
}
function checkIfGameLost() {
  if (mistakes == maxWrong) {
    document.getElementById('wordSelected').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost! Try again?';
  }
}

//function to reset game
function reset() {
  mistakes = 0;
  guessed = [];
 

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
  updateHangmanPicture();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();