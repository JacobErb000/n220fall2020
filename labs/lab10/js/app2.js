let colorBlock = document.getElementById("colorBlock");
let currentColor = document.getElementById("currentColor");


let red1 = document.getElementById("red1");
let red5 = document.getElementById("red5");
let red10 = document.getElementById("red10");

let green1 = document.getElementById("green1");
let green5 = document.getElementById("green5");
let green10 = document.getElementById("green10");

let blue1 = document.getElementById("blue1");
let blue5 = document.getElementById("blue5");
let blue10 = document.getElementById("blue10");

red1.addEventListener("click", addRed);
red5.addEventListener("click", addRed);
red10.addEventListener("click", addRed);

green1.addEventListener("click", addGreen);
green5.addEventListener("click", addGreen);
green10.addEventListener("click", addGreen);

blue1.addEventListener("click", addBlue);
blue5.addEventListener("click", addBlue);
blue10.addEventListener("click", addBlue);

colorBlock.style.backgroundColor = colorBlock.getAttribute("data-color");
colorBlock.style.width = "200px";
colorBlock.style.height = "200px";

currentColor.style.backgroundColor = "#FFFFFF";
currentColor.style.width = "200px";
currentColor.style.height = "10px";
currentColor.style.margin = "25px";


function addRed(event){
let response = colorBlock.getAttribute("data-color");
let buttonColor = event.target.getAttribute("data-color");

response = response + buttonColor;
colorBlock.style.backgroundColor = response + buttonColor;
currentColor.innerHTML = response;

    console.log(response)
    console.log(colorBlock.style.backgroundColor)
      

}
function addGreen(event){
let response = colorBlock.getAttribute("data-color");
let buttonColor = event.target.getAttribute("data-color");

response = response + buttonColor;
colorBlock.style.backgroundColor = response + buttonColor;
currentColor.innerHTML = response;

    console.log(response)
    console.log(colorBlock.style.backgroundColor)
      
}
function addBlue(event){
let response = colorBlock.getAttribute("data-color");
let buttonColor = event.target.getAttribute("data-color");

response = response + buttonColor;
colorBlock.style.backgroundColor = response + buttonColor;

currentColor.innerHTML = response;

    console.log(response)
    console.log(colorBlock.style.backgroundColor)

}