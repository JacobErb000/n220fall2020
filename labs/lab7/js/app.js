let txtName = document.getElementById("txtName");
let dvResponse = document.getElementById("dvResponse");

function greetMessage(){
    dvResponse.innerHTML = "Greetings " + txtName.value;
    txtName.value = "";

}