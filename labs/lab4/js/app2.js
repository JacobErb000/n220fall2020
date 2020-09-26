let yPosition = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let y = 0;
let ySpeed = 5;

function setup() {
  createCanvas(500, 500);
  background(100);
}

function draw() {
  yPosition.shift();
  yPosition.push(y);

  if (y < 500) {
    y = y + ySpeed;
    for (var i = 0; i < yPosition.length; i++) {
      background(100);
      fill(66, 135, 245);
      circle(250, yPosition[i], 30);
      circle(250, yPosition[i] - 50, 30);
      circle(250, yPosition[i] - 100, 30);
      circle(250, yPosition[i] - 150, 30);
      circle(250, yPosition[i] - 200, 30);
      circle(250, yPosition[i] - 250, 30);
      circle(250, yPosition[i] - 300, 30);
      circle(250, yPosition[i] - 350, 30);
      circle(250, yPosition[i] - 400, 30);
      circle(250, yPosition[i] - 450, 30);
      circle(250, yPosition[i] - 500, 30);
    }
  } else {
    y = 0;
  }
  console.log(yPosition);
  console.log(y);
}
