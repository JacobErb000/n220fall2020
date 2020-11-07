

for(var i = 0; i < 100; i++){
    let dvSquare = document.createElement("div");
    // let randomNumber = Math.floor(Math.random() * 255)
    // dvSquare.style.backgroundColor = rgb(randomNumber, randomNumber, randomNumber);

    dvSquare.style.backgroundColor = "#0000FF"
    dvSquare.style.width = "20px";
    dvSquare.style.height = "20px";
    dvSquare.style.margin = "3px";
    dvSquare.style.float = "left";

    document.body.appendChild(dvSquare);
}