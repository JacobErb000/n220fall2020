let xPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let yPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
  createCanvas(400, 300);
  background(100);
}

function draw() {
  //refreshes the background to make only current 10 locations present
  background(100);
  // adds to array and keeps newest versions
  xPositions.push(mouseX);
  xPositions.shift();

  yPositions.push(mouseY);
  yPositions.shift();

  //creates circles on updating x & y positions
  for (var i = 0; i < xPositions.length; i++) {
    circle(xPositions[i], yPositions[i], 20);
  }
}
