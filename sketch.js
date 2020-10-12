var paper, ground, dustbin1, dustbin2, dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	paper = new Paper(200, 720, 40, 40);
	ground = new Ground(800, 770, 1600, 30);
	dustbin1 = new Dustbin(900, 690, 20, 140);
	dustbin2 = new Dustbin(1250, 690, 20, 140);
	dustbin3 = new Dustbin(1075, 750, 370, 20);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("lightblue");

	paper.display();
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

  drawSprites();

//   keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:150, y:-150});
	}
}