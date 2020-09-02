function setup() {
  var eye = "#222424";
  var body = "#f5f5f5";

  createCanvas(800, 600);
  background(204, 255, 252);

  strokeWeight(20);
  stroke(143, 76, 26);
  line(200, 300, 100, 100);
  line(700, 300, 540, 250);

  strokeWeight(1);
  stroke(140, 140, 140);
  fill(body);
  ellipse(375, 450, 530, 290);

  fill(body);
  ellipse(375, 320, 425, 250);

  fill(body);
  ellipse(375, 180, 300, 200);

  fill(eye);
  circle(300, 150, 30);

  fill(eye);
  circle(450, 150, 30);

  fill(eye);
  ellipse(375, 220, 50, 40);
}
