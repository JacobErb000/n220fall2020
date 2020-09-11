function setup() {
  createCanvas(400, 300);
}
function draw() {
  background(0, 0, 0);
  fill(255, 255, 255);
  circle(mouseX, mouseY, 30);

  if (mouseX > 200) {
    fill(184, 33, 41);
    circle(mouseX, mouseY, 30);
  } else {
    fill(31, 42, 242);
    circle(mouseX, mouseY, 30);
  }
}
