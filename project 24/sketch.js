
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(400,height,800,70);
    hammer1 = new Hammer(400,320,70,70);
    Rubber1 = new Rubber(400,320,70,70);
    Stone1 = new Stone(400,320,70,70);



	Engine.run(engine);
  
}


function draw() {
  ellipseMode(CENTER);
  background(0);
  ground.display();
  hammer1.display();
  Rubber1.display();
  Stone1.display();
  drawSprites();
 
}



