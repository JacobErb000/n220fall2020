var txtInput = document.getElementById("txtInput");
var counter = document.getElementById("counter"); 
var tally = 0;


function checkWords(){
    var inputString = txtInput.value;
    var splitString = inputString.split(" ");

    for(var i = 0; i < splitString.length; i++){
      var curWord = splitString[i];
        if(curWord == "clear"){
        tally = tally + 1;
        }
        if(curWord == "water"){
        tally = tally + 1;
        }
        if(curWord == "tires"){
        tally = tally + 1;
        }
    

    counter.innerHTML = tally + " Bad Words";
    txtInput.value = "";
    }


    console.log(splitString);
    console.log(tally);

}