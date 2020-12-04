let boxColor1 = document.getElementById("box1");
let boxColor2 = document.getElementById("box2");
let boxColor3 = document.getElementById("box3");

boxColor1.addEventListener("click", boxClicked);
boxColor2.addEventListener("click", boxClicked);
boxColor3.addEventListener("click", boxClicked);


   boxColor1.style.backgroundColor = "#9999";
   boxColor1.style.height = "200px";
   boxColor1.style.width = "200px";
   boxColor1.style.float = "left";
   boxColor1.style.margin = "5px";

   boxColor2.style.backgroundColor = "#9999";
   boxColor2.style.height = "200px";
   boxColor2.style.width = "200px";
   boxColor2.style.float = "left";
   boxColor2.style.margin = "5px";

   boxColor3.style.backgroundColor = "#9999";
   boxColor3.style.height = "200px";
   boxColor3.style.width = "200px";
   boxColor3.style.float = "left";
   boxColor3.style.margin = "5px";



  
function boxClicked(event){
let response = event.target.getAttribute("data-color");
event.target.style.backgroundColor = response;

}


