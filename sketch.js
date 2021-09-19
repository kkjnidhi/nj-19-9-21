const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5,c
var roof,rope1,rope2,rope3,rope4,rope5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		restitution: 0.95,
	
		isStatic : true
	  }
	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	
  ball1 = Bodies.circle(330,250,30,ball_options);
  World.add(world,ball1);
  ball2 = Bodies.circle(390,250,30,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(420,250,30,ball_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(450,250,30,ball_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(360,250,30,ball_options);
  World.add(world,ball5);
   rope1=new rope(ball1,roof,-80,30)
 


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display()


  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,30);
  ellipse(ball2.position.x,ball2.position.y,30);
  ellipse(ball3.position.x,ball3.position.y,30);
  ellipse(ball4.position.x,ball4.position.y,30);
  ellipse(ball5.position.x,ball5.position.y,30);


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
  if(keyCode==="UP_ARROW")
ball1 .Matter.Body.applyForce(ball,{x:1000,y:100},{x:5,y:0});
}