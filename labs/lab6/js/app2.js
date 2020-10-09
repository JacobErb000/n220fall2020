var myCircle = {
    x: 0,
    y: 0,
    r: 10,
    update: function(){
        circle(this.x, this.y, this.r);
    }
}



function setup(){
    createCanvas(400, 300);
}

function draw(){
    myCircle.update();
    myCircle.r += 0.5;
    myCircle.x += 2;
    myCircle.y += 2;
}