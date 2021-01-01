const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball,ball2;


var ground

function setup() {
  createCanvas(400,400);

engine=Engine.create()
world=engine.world;

var ball2opt={
  restitution:1
}

var ballOptions={
  restitution:1
}

var options={
isStatic:true,

}
ground=Bodies.rectangle(200,400,400,50,options);
World.add(world,ground);
ball=Bodies.circle(320,200,20,ballOptions);
World.add(world,ball);
ball2=Bodies.circle(120,200,20,ball2opt);
World.add(world,ball2);

console.log(ground);



}


function draw() {
  background(0);  
Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,10,10);
  
}