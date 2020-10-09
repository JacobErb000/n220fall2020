var myRectangle = {
    w: 100,
    h: 50,
    x: 150,
    y: 100,
    color: [88, 151, 252]
}





function setup(){
    createCanvas(400, 300);
}

function draw(){
    fill(myRectangle.color)
    rect(myRectangle.x, myRectangle.y, myRectangle.w, myRectangle.h);
}