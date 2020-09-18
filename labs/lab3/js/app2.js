let colors = ["#ffc93c", "#07689f"];
let clouds = ["#98d5e3", "#9abcc4", "#b4d6de"];

function setup() {
  createCanvas(600, 500);
  background(194, 238, 255);
}

function draw() {
  // sun
  fill(colors[0]);
  noStroke();
  circle(20, 20, 100);

  // ocean
  fill(colors[1]);
  rect(0, 400, 600, 400);

  for (var i = 0; i < clouds.length; i++) {
    // cloud shape with loop to generate the rain clouds moving into frame based off the cloud array
    fill(clouds[i]);
    ellipse(i * 200, i * 60 + 140, 280, 60);
    ellipse(i * 200 - 300, i * 80 + 200, 220, 40);
    ellipse(480 * i, i * 200 - 150, 190, 30);
    ellipse(120 * i, 140 * i + 20, 190, 60);
    ellipse(120 * i, 260 * i - 190, 120, 40);
  }
}
