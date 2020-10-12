class Dustbin {
  constructor(x, y, width, height) {
    var options = {
        'isStatic':true,
        'restitution':0.1,
        'friction':1,
        'density':1
    }
    this.body = Bodies.rectangle(x, y, 20, height, options);
    this.width = width;
    this.height = height;

   

    World.add(world, this.body);
    this.image=loadImage("sprites/dustbingreen.png");
  }
  display(){
   
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke("green");
    fill("green");
    rect(0, 0, this.width, this.height);
    pop();
  }
};