let xPosition = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  drawBackground(150, 220);
  drawAsteroid(100, 50, 10, mouseX, mouseY);
}
//moon in the background
function drawBackground(moonColor, moonGlow) {
  fill(moonColor);
  strokeWeight(5);
  stroke(moonGlow);

  circle(30, 0, 60);
  //stars in the background layer
  fill("#e3cf5b");
  noStroke();
  circle(300, 200, 10);
  circle(20, 240, 13);
  circle(350, 120, 18);
  circle(400, 370, 50);
  circle(110, 370, 26);
}

function drawAsteroid(
  asteroidColor,
  asteroidGlow,
  asteroidLines,
  xPosition,
  yPosition
) {
  // flames behind the asteroid
  stroke("#cc3c2f");
  for (var i = 0; i < asteroidLines; i++) {
    line(xPosition, yPosition, i * 25 + 480, 200);
    line(xPosition, yPosition, i * 23 + 440, 220);
    line(xPosition, yPosition, i * 21 + 400, 240);
  }
  //asteroid settings
  fill(asteroidColor);
  strokeWeight(3);
  stroke(asteroidGlow);

  circle(xPosition, yPosition, 30);
}
