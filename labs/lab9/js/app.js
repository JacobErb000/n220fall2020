var txtSentence = document.getElementById("txtSentence");
var txtSum = document.getElementById("txtSum");
var txtAverage = document.getElementById("txtAverage");
var sum = 0;
var average = 0;


function breakString(){
var inputString = txtSentence.value;
var splitString = inputString.split(",");

for(var i = 0; i < splitString.length; i++){
    var curGuess = splitString[i];
    sum = Number(sum) + Number(curGuess);
    average = Number(sum) / Number(splitString.length);

    txtSum.innerHTML = "Sum = " + sum;
    txtAverage.innerHTML = "Average = " + average;
   txtSentence.value = "";
   
}

console.log(splitString);
console.log(sum);
console.log(average);
}