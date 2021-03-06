var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, 800, 10, {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	box1 = new Box(400,650, 200, 20);
	box2 = new Box(295, 610, 20, 100);
	box3 = new Box(505, 610, 20, 100);

	/*box1 = new BoxClass(400, 650, 200, 20);
	box2 = new BoxClass(295, 610, 30, 100);
	box3 = new BoxClass(505, 610, 30, 100);*/

}
function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

    /*box1.shapeColor = color("red");
	box2.shapeColor = color("red");
	box3.shapeColor = color("red");*/

  box3.display();
  box2.display();
  box1.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



