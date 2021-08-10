
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball_options={
		isStatic:false,
    restitution:0.3,
    friction:0,
		density:1.2
	}

  ball = Bodies.circle(200,100,10,ball_options)
  World.add(world,ball)

	Engine.run(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball,ball.position.Body,20);
  groundObj = new Ground(width/2,670,width,20);
  leftSide = new Ground(1100,600,20,120);
  groundObj.show();
  leftSide.show(); 
  Engine.update(engine);
}

