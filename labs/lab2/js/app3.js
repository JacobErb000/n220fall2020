let xPos = 0;
let yPos = 300;

let xSpeed = 5;

function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(0, 0, 0);

  if (xPos > 800) {
    xPos = 0;
  } else {
    circle(xPos, yPos, 30);
    xPos = xPos + xSpeed;
  }
}
