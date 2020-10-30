//object creation of a ball that will have velocity based on what it hits
var ball = { 
    x: 100,
    y: 100,
    velocityX: 2,
    velocityY: 2,
    update: function() {
    noFill();
    stroke(255, 238, 130);
    circle(this.x, this.y, 10);
    this.x += this.velocityX;
    this.y += this.velocityY;

//creation of walls to contain the ball/have the ball bounce off the walls
    if(ball.x > 400) {
        ball.x = 400;
        ball.velocityX *= -1;
        }
        
        if(ball.x < 0) {
        ball.x = 0;
        ball.velocityX *= -1;
        }
        
        if(ball.y < 0) {
        ball.y = 0;
        ball.velocityY *= -1;
        }
    }
}

//creation of the user controlled paddle object that will be controlled with the arrow keys
    var paddle = {
    x: 100,
    y: 350,
    w: 150,
    h: 20,
    update: function() {
    noFill();
    stroke(143, 251, 255);
    rect(this.x, this.y, this.w, this.h);
    if(keyIsDown(LEFT_ARROW)) {
    this.x -= 2;
    }
    
    if(keyIsDown(RIGHT_ARROW)) {
    this.x += 2;
    }
    }
}
    
    //creation of array for block storage
    var blocks = [];

    // create blocks in array and space them specifically until for loop is completed
    for(var i = 0; i < 6; i++) {
    blocks[i] = { 
        x: i * 60,
        y: 10 
    }
    }
    
    function setup() {
    createCanvas(400, 400);
    }
    
    function draw() {
    background(70);
    
    ball.update();
    paddle.update();
    

    //hit test for ball to bounce off of the paddle so the ball can be reflected to remaining blocks
    if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
    ball.velocityY *= -1;
    }
    //for loop to measure how the blocks are positioned at the top of the screen
    for(var i = 0; i < blocks.length; i++) {
    var b = blocks[i];
    rect(b.x, b.y, 60, 20);
    //hit test to measure if the ball comes in contact with the blocks
    //bounce the ball off the blocks and break the blocks
    if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
    ball.velocityY *= -1;
    
    //remove block from array
    blocks.splice(i, 1);
    }
    }
//hit test that runs if the block or paddle specific hit tests are triggered in their specific if statements
    function hitTestPoint(px, py, bx, by, bw, bh) {
    
        if(px > bx && px < bx + bw) {
        if(py > by && py < by + bh) {
        return true;
        }
        }
        
        return false;
        }
    }
    
   