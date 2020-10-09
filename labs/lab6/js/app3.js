var myCircle = {
    x: 200,
    y: 150,
    update: function(){
        circle(this.x, this.y, 30);

        if(keyIsDown(LEFT_ARROW)){
            myCircle.x -= 2;
        }
        if(keyIsDown(RIGHT_ARROW)){
            myCircle.x += 2;
        }
        if(keyIsDown(UP_ARROW)){
            myCircle.y -= 2;
        }
        if(keyIsDown(DOWN_ARROW)){
            myCircle.y += 2;
        }
    }
}


function setup(){
    createCanvas(400, 300);
}

function draw(){
    background(255);
    myCircle.update();
}