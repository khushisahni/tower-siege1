const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint;

var engine,world;
var slingShot;
var stand1,stand2;
var ball;

function preload(){
    polygon_img=loadImage("polygon.png");
  }

function setup(){
    createCanvas(900,400);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground();

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    ball = Bodies.circle(50,200,50);
    World.add(world,ball);
 

    //level 1
    box1 = new Box (300,275,30,40);
    box2 = new Box (330,275,30,40);
    box3 = new Box  (360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box (420,275,30,40);
    box6 = new Box (450,275,30,40);
    box7 = new Box (480,275,30,40);

    //level 2
    box8 = new Box(330,235,30,40);
    box9 = new Box (360,235,30,40);
    box10 = new Box (490,235,30,40);
    box11= new Box (420,235,30,40);
    box12= new Box (450,235,30,40);

    //level 3
    box13= new Box (360,195,30,40);
    box14= new Box (390,195,30,40);
    box15= new Box (420,195,30,40);

    //level 4
    box16= new Box  (390,155,30,40);

    //second stand
    //level one
    box17= new Box (640,175,30,40);
    box18= new Box (670,145,30,40);
    box19= new Box  (640,175,30,40);
    box20= new Box (670,175,30,40);
    box21= new Box (700,175,30,40);

    //level two
    box22= new Box (730,175,30,40);
    box23= new Box (760,175,30,40);
    box24= new Box (670,135,30,40);

    //level three
    box25= new Box (700,135,30,40);
    
    
    //ball = new Ball(0,0,50);

    
   slingShot = new Slingshot(this.ball,{x:100,y: 200});
    
    //groundHovering = new Ground(550,160,200,20);


        
}

function draw(){

    background("black");
   Engine.update(engine);

   textSize(20);
   fill("lightyellow");
   text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    
    fill ("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill ("red");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill ("green");
    box13.display();
    box14.display();
    box15.display();

    fill("yellow");
    box16.display();

    fill ("blue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    fill("red");
    box22.display();
    box23.display();
    box24.display();

    fill("green");
    box25.display();

    /*
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
*/

    
     slingShot.display();
   // groundHovering.display();
    //ball.display();*/
    ground.display();
    stand1.display();
    stand2.display();

   imageMode(CENTER)
   image(polygon_img ,ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x: mouseX,y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}