let answerBox = document.getElementById("answerBox");

answerBox.style.backgroundColor = "#9999"
answerBox.style.width = "100px"
answerBox.style.height = "50px"

function questionAnswer(event){
let answer = event.target.getAttribute("data-answer");

answerBox.innerHTML = answer;

}

