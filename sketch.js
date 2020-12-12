
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,TREEIMG
var ground
var stone
var boy,boyImg
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10
var string
 var constraintStone
function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png")
TREEIMG = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,680,800,60)
	 tree = createSprite(100, 300, 60, 10)
tree.addImage(TREEIMG)
tree.scale = 0.6
boy=createSprite(650,580,20,10)
boy.addImage(boyImg)
	boy.scale=0.11
	
stone = new Stone(620,100,60)
	string = new String(stone.body, {x:600,y:500})

	mango1=new Mango(100,150,30)
  mango2=new Mango(140,200,30)
  mango3=new Mango(200,80,30)
	mango4=new Mango(300,200,30)
	mango5=new Mango(120,30,30)
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display() 
   drawSprites();

  stone.display()
 string.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
 
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:90,y:530})
string.attach(stone.body)	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}
function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	
if(distance<=mango.radius+stone.radius){
	
	Matter.Body.setStatic(mango.body,false)
}
}



