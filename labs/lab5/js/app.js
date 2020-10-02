let colors = ["#9900b8", "#1e9e2f", "#c46c00", "#4753f5"];
function setup() {
  createCanvas(400, 400);
  drawCircle();
}

function drawCircle() {
  for (var i = 0; i < 1; i++) {
    fill(0);
    circle(200, 200, 30);
  }
}
function mouseClicked() {
  var x = int(random(0, 4));
  fill(colors[x]);
  circle(200, 200, 30);
  console.log(x);
}
