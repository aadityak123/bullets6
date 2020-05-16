var bullet1,bullet2,bullet3,bullet4;

var wall1,wall2,wall3,wall4;

var block1,block2,block3,block4,block5;

var ob1,ob2,ob3,ob4;

var obj1,obj2,obj3,obj4;

var fe1,fe2,fe3,fe4;

var thickness1,thickness2,thickness3,thickness4;

var speed1,speed2,speed3,speed4;

var weight1,weight2,weight3,weight4;



function setup() {
  createCanvas(1600,400);

  thickness1 = random(80,83);
  thickness2 = random(22,83);
  thickness3 = random(22,83);
  thickness4 = random(22.83);

  speed1 = random(223,229);
  speed2 = random(223,321);
  speed3 = random(223,321);
  speed4 = random(223,321);

  weight1 = random(30,35);
  weight2 = random(30,52);
  weight3 = random(30,52);
  weight4 = random(30,52);


  //creating bullets
  bullet1 = createSprite(50,50,10,10);
  bullet1.shapeColor = "white";
  bullet1.weight = weight1;
  bullet1.speed = speed1;

  bullet2 = createSprite(50,150,10,10);
  bullet2.shapeColor = "white";
  bullet2.weight = weight2;
  bullet2.speed = speed2;

  bullet3 = createSprite(50,250,10,10);
  bullet3.shapeColor = "white";
  bullet3.weight = weight3;
  bullet3.speed = speed3;

  bullet4 = createSprite(50,350,10,10);
  bullet4.shapeColor = "white";
  bullet4.weight = weight4;
  bullet4.speed = speed4;

  //creating walls
  thickness = random(22,83);
  wall1 = createSprite(1500,50,thickness1,50);
  wall1.shapeColor = color(80,80,80);
  

  wall2 = createSprite(1500,150,thickness2,50);
  wall2.shapeColor = color(80,80,80);
  

  wall3 = createSprite(1500,250,thickness3,50);
  wall3.shapeColor = color(80,80,80);
  

  wall4 = createSprite(1500,350,thickness4,50);
  wall4.shapeColor = color(80,80,80);
 

  //creating barriers
  block1 = createSprite(800,100,1600,5);
  block1.shapeColor = "black";

  block2 = createSprite(800,200,1600,5);
  block2.shapeColor = "black";

  block3 = createSprite(800,300,1600,5);
  block3.shapeColor = "black";

  block4 = createSprite(800,400,1600,10);
  block4.shapeColor = "black";

  block5 = createSprite(800,0,1600,10);
  block5.shapeColor = "black";

  //creating bullets
  ob1 = createSprite(100,45,150,10);
  obj1 = createSprite(50,60,100,20);
  ob1.shapeColor = "black";
  obj1.shapeColor = "black";

  ob2 = createSprite(100,145,150,10);
  obj2 = createSprite(50,160,100,20);
  ob2.shapeColor = "black";
  obj2.shapeColor = "black";

  ob3 = createSprite(100,245,150,10);
  obj3 = createSprite(50,260,100,20);
  ob3.shapeColor = "black";
  obj3.shapeColor = "black";

  ob4 = createSprite(100,345,150,10);
  obj4 = createSprite(50,360,100,20);
  ob4.shapeColor = "black";
  obj4.shapeColor = "black";

  //creating the firing effect
  fe1 = createSprite(180,45,10,10);
  fe1.shapeColor = "yellow";
  fe1.visible = false;

  fe2 = createSprite(180,145,10,10);
  fe2.shapeColor = "yellow";
  fe2.visible = false;

  fe3 = createSprite(180,245,10,10);
  fe3.shapeColor = "yellow";
  fe3.visible = false;

  fe4 = createSprite(180,345,10,10);
  fe4.shapeColor = "yellow";
  fe4.visible = false;
  
}

function draw() {
  background(0,0,155);  

  //changeing colours as per the damage 
  if( 0.5* weight1* speed1* speed1/ (thickness1* thickness1* thickness1) <10 && bullet1.isTouching(wall1)){
    wall1.shapeColor = "green"
  }
  
  if( 0.5* weight1* speed1* speed1/ (thickness1* thickness1* thickness1) >10 && bullet1.isTouching(wall1)){
    wall1.shapeColor = "red"
  }

  if( 0.5* weight2* speed2* speed2/ (thickness2* thickness2* thickness2) <10 && bullet2.isTouching(wall2)){
    wall2.shapeColor = "green";
  }
  
  if( 0.5* weight2* speed2* speed2/ (thickness2* thickness2* thickness2) >10 && bullet2.isTouching(wall2)){
    wall2.shapeColor = "red";
  }

  if( 0.5* weight3* speed3* speed3/ (thickness3* thickness3* thickness3) <10 && bullet3.isTouching(wall3)){
    wall3.shapeColor = "green";
  }

  if( 0.5* weight3* speed3* speed3/ (thickness3* thickness3* thickness3) >10 && bullet3.isTouching(wall3)){
    wall3.shapeColor = "red";
  }

  if( 0.5* weight4* speed4* speed4/ (thickness4* thickness4* thickness4) <10 && bullet4.isTouching(wall4)){
    wall4.shapeColor = "green";
  }
  if( 0.5* weight4* speed4* speed4/ (thickness4* thickness4* thickness4) >10 && bullet4.isTouching(wall4)){
    wall4.shapeColor = "red";
  }

  //setting controls to fire
  if(keyWentDown("1")){
    bullet1.velocityX = bullet1.speed;
  }

  if(keyWentDown("2")){
    bullet2.velocityX = bullet2.speed;
  }

  if(keyWentDown("3")){
    bullet3.velocityX = bullet3.speed;
  }

  if(keyWentDown("4")){
    bullet4.velocityX = bullet4.speed;
  }

  //creating the firing effect
  if(bullet1.isTouching(fe1)){
    fe1.visible = true;
  }
  else{
    fe1.visible = false;
  }

  if(bullet2.isTouching(fe2)){
    fe2.visible = true;
  }
  else{
    fe2.visible = false;
  }

  if(bullet3.isTouching(fe3)){
    fe3.visible = true;
  }
  else{
    fe3.visible = false;
  }

  if(bullet4.isTouching(fe4)){
    fe4.visible = true;
  }
  else{
    fe4.visible = false;
  }

  //making the bullrts collide
  bullet1.collide(wall1);
  bullet2.collide(wall2);
  bullet3.collide(wall3);
  bullet4.collide(wall4);

  //texting
  text("press 1 to shoot",300,30);
  text("press 2 to shoot",300,130);
  text("press 3 to shoot",300,230);
  text("press 4 to shoot",300,330);

  drawSprites();
}