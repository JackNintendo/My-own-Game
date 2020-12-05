const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImz;
var spaceshipImg,spaceship;

function preload(){
  backgroundImz = loadImage("sprites/Space_Background.png");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    spaceship = new SpaceShip(200,50);

    
 

}

function draw(){
    background(backgroundImz);
    Engine.update(engine);

    spaceship.display();
  
}