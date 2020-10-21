var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var log1,log2,log3;
var logBody1,logBody2,logBody3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800,600);
	rectMode(CENTER);
	

	packageBody=packageBody = Bodies.circle(width/2 , 180 , 5 , {restitution:0.5, isStatic:false});

	packageBody.addImage(packageIMG);
	packageBody.scale=0.2;

	helicopterSprite=createSprite(width/2, 180, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	log1 = createSprite(width/2,550,200,20);
	log1.shapeColor = "red";

	log2 = createSprite(290,510,20,100);
	log2.shapeColor = "red";

	log3 = createSprite(500,510,20,100);
	log3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 logBody1 = Bodies.rectangle(width/2, 650, 20, 200 , {isStatic:true} );
	 World.add(world,logBody1);

	 logBody2 = Bodies.rectangle(width/2, 650, 20, 200 , {isStatic:true} );
	 World.add(world,logBody2);

	 logBody3 = Bodies.rectangle(width/2, 650, 20, 200 , {isStatic:true} );
	 World.add(world,logBody3);

	 packageBody = Bodies.circle(width/2 , 180 , 5 , {restitution:0.5, isStatic:false});
	 World.add(world, packageBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
if (keyDown===DOWN_ARROW) {
packageBody.restitution=false
packageBody.velocityY=12;
}
}






