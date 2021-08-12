const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg 
var fl1
var engine,world;
var sand
function preload(){

bg=loadImage("snow1.jpg");


}





function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  fl1 = new Sand(200,32);
  fl2 = new Sand(100,20);
  fl3 = new Sand(150,20);
  fl4 = new Sand(20,20);
  fl5 = new Sand(80,20);
  fl6 = new Sand(70,20);
  fl7 = new Sand(50,20);
  fl8 = new Sand(75,32);
  fl9 = new Sand(10,20);
  fl10 = new Sand(15,20);
  fl11 = new Sand(275,20);
  fl12 = new Sand(143,20);
  fl13 = new Sand(24,20);
  fl14 = new Sand(72,20);

}




function draw() {
  background(bg);  
  Engine.update(engine);
  fl1.display()
  fl2.display()
  fl3.display()
  fl4.display()
  fl5.display()
  fl6.display()
  fl7.display()
  fl8.display()
  fl9.display()
  fl10.display()
  fl11.display()
  fl12.display()
  fl13.display()
  fl14.display()


  drawSprites();
}