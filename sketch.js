const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var rope
let engine;
let world;
var ground;
var food

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  rope =  new Rope(6, {x:245, y:30})
  
var foodoptions = {
  density:0.001
}
food = Bodies.circle(300, 300, 15, foodoptions);
Matter.Composite.add(rope.body, food)
//World.add(World, food)



}



function draw() 
{
  background(51);
  ground.show();
  rope.show();
  Engine.update(engine);
  ellipse(food.position.x, food.position.y, 15, 15)

 
   
}
