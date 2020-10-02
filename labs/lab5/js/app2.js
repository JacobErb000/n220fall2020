let circleY = 0;
let circleX = 0;
let rectX = 120;
let rectY = 300;
let rectW = 300;
let rectH = 100;
var colliding = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  drawRect(rectX, rectY, rectW, rectH);
  drawCircle(circleX, circleY);
  collideRect();
  bounce();
}
function drawRect(rectX, rectY, rectW, rectH) {
  fill(200);
  rect(rectX, rectY, rectW, rectH);
}

function drawCircle(circleX, circleY) {
  circle(circleX, circleY, 30);
}

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {
  var colliding = false;
  if (circleX > rectX && circleX < rectX + rectW) {
    if (circleY > rectY && circleY < rectY + rectH) {
      return true;
    }
  }

  return false;
}

function bounce() {
  if (colliding == true) {
    circleX++;
    circleY--;
  }
  if (colliding == false) {
    circleX++;
    circleY++;
  }
}
