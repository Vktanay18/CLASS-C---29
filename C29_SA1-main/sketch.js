const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope 
var fruit
var fruitconnection

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,3000,20);
  rope = new Rope(6,{x:705 , y:100})
  
  var fruit_options = {
    density: 0.001
  }
  fruit = Bodies.circle(300,300,15,fruit_options)
  Matter.Composite.add(rope.body,fruit)

  fruitconnection = new Link(rope,fruit)

  rectMode(CENTER);
  ellipseMode(RADIUS)
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  ellipse(fruit.position.x , fruit.position.y , 15)



  Engine.update(engine);
  

 
   
}
