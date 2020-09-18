function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(150);
  noFill();
  for (var i = 1; i < 30; i++) {
    circle(200, 200, i * 7);
  }
}
