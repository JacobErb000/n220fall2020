let bvx = 2
let bvy = 3



var myPaddle = {
    x: 400,
    y: 150,

    update: function(){
        rect(this.x, this.y, 50, 100);

       
        if(keyIsDown(UP_ARROW)){
            myPaddle.y -= 2;
        }
        if(keyIsDown(DOWN_ARROW)){
            myPaddle.y += 2;
        }
// ball bounces off paddle and speeds up
        if(hitTestPoint(myBall.x, myBall.y, this.x, this.y, 50, 100)){
            bvx *= -1.2;
            bvy *= -1.2;
        }
    }
}
var myBall = {
    x: 200,
    y: 200,
    update: function(){
        circle(this.x, this.y, 20);

        this.x -= bvx;
        this.y += bvy;

        // right side reseting
        if(this.x > 500){
            this.x = 200;
            this.y = 200
            bvx = 2;
            bvy = 3;
        }
        //top side bouncing 
        if(this.y < 0){
            this.y = 0;
            bvy *= -1;
        }
        //left side bouncing
        if(this.x < 0){
            this.x = 0;
            bvx *= -1;
        }
        //bottom side bouncing
        if(this.y > 400){
            this.y = 400;
            bvy *= -1;
        }
    }
}

function hitTestPoint(px, py, rx, ry, rw, rh){
    if(px > rx && px < rx + rw){
        if(py > ry && ry < ry + rh){
            return true;
        }
    }
    return false;
}


function setup(){
    createCanvas(500, 400);

}

function draw(){
    background(0);
    myPaddle.update();
    myBall.update();


}

