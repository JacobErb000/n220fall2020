function setup() {
  createCanvas(1500, 300);
}

function draw() {
  background(200);
  let y = 100;

  for (var s = 0; s < 25; s++) {
    let x = s * 50; //setup for spacing

    if (s % 3 == 0 && s % 5 == 0) {
      //blue sqares if divisable by both
      fill(24, 24, 204);
      square(x, y, 50);
    } else if (s % 5 == 0) {
      // green sqares by 5
      fill(0, 255, 0);
      square(x, y, 50);
    } else if (s % 3 == 0) {
      // purple circle by 3
      fill(153, 31, 240);
      circle(x + 25, y + 25, 25);
    } else {
      // remaining are black circles
      fill(0);
      circle(x + 25, y + 25, 25);
    }
  }
}
