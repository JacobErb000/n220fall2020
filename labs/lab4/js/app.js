let colors = ["#e0ece4", "#ff4b5c", "#66bfbf"];

function setup() {
  createCanvas(400, 200);
  background(100);
}

function draw() {
  for (var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(i * 130, 100, 140 + i, 30);
  }
}
