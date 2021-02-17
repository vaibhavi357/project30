const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonImg;

function preload() {
	polygonImg = loadImage("polygon.polygon.png");
}

function setUp(){
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     ground1 = new Ground(600,height,1200,20);
     ground2 = new Ground(300,height,600,20);

     box1 = new Box(330,235,30,40);
     box2 = new Box(360,235,30,40);
     box3 = new Box(390,235,30,40);
     box4 = new Box(420,235,30,40);
     box5 = new Box(450,235,30,40);
     box6 = new Box(480,235,30,40);
     box7 = new Box(510,235,30,40);
     box8 = new Box(540,235,30,40);
     box9 = new Box(570,235,30,40);
     box10 = new Box(600,235,30,40);
     box11 = new Box(630,235,30,40);
     box12 = new Box(660,235,30,40);
     box13 = new Box(690,235,30,40);
     box14 = new Box(720,235,30,40);
     box15 = new Box(750,235,30,40);
     box16 = new Box(780,235,30,40);

     polygon = Bodies.circle(50,200,20);
     World.add(world,polygon);
     imageMode(CENTER);
     image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

     slingshot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw(){

      background(backgroundImg);
    Engine.update(engine);

    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    polygon.display();
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}