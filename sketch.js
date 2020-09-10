var boss,bossImg,caveImg
var ballGroup;
var Youwin
var Gameover
var dangerzone
function preload(){
  caveImg=loadImage("HGSS_Dark_Cave-Route_45-Day.png")
  bossImg=loadImage("front_20-_20on_1_1.png")
  lev1Img=loadImage("l1.jpg");
  gameoverImg=loadImage("10.jpg")
}
function setup() {
  createCanvas(800,400);
 boss=createSprite(400,20,20,20);
 boss.addImage(bossImg)
 boss.scale=0.1
 line=createSprite(400,330,550,30)
 line1=createSprite(400,270,550,30)
 line2=createSprite(400,210,550,30)
 line3=createSprite(400,150,550,30)
 line4=createSprite(400,90,550,30)
 line5=createSprite(420,78,10,30)
 line6=createSprite(390,78,10,30)
 line7=createSprite(400,300,10,60)
 line8=createSprite(670,240,10,60)
 line9=createSprite(220,120,10,60)
 line10=createSprite(300,180,10,60)
 Youwin=createSprite(400,200,800,400)
  dangerzone=createSprite(690,330,10,10)
 dangerzone.shapeColor="red"
 Youwin.visible=false;
 boy=createSprite(150,330,10,10)
 boy.shapeColor="red"
 Gameover=createSprite(400,200,800,400)
 Gameover.visible=false;
 ballGroup=new Group()
}

function draw() {
  background(caveImg);  
  if(boy.isTouching(line)||boy.isTouching(line1)||boy.isTouching(line2)||boy.isTouching(line3) 
  ||boy.isTouching(line4)||boy.isTouching(line5)||boy.isTouching(line6)||boy.isTouching(line7)||boy.isTouching(line8)||boy.isTouching(line9)||boy.isTouching(line10))
  {
    
    if(keyDown(UP_ARROW)){
boy.y=boy.y-5
    
    }
    if(keyDown(DOWN_ARROW)){
      boy.y=boy.y+5
    }
    if(keyDown(LEFT_ARROW)){
      boy.x=boy.x-5
    }
    if(keyDown(RIGHT_ARROW)){
      boy.x=boy.x+5
    }
  }  
  if(ballGroup.isTouching(boy)){
  Gameover.addImage(gameoverImg) 
  ballGroup.setVelocityYEach(0)
  ballGroup.destroyEach();
  }
  win();
  spawnball();
  drawSprites();
}
function spawnball(){
  if(frameCount%40===0){
    var ball=createSprite(random(20,600),0,20,20)
    ball.velocityY=2
    ballGroup.add(ball)
  }
}
function win(){
  if(boy.isTouching(boss)){
    Youwin.visible=true;
Youwin.addImage(lev1Img)
  }
  if(mousePressedOver(Youwin)){
    level2function();
  }
}
function level2function(){
Youwin.destroy();
boy.x=150
boy.y=330

var dangerzone1=createSprite(420,270,10,10)
dangerzone1.shapeColor="red"
var dangerzone2=createSprite(470,220,10,10)
dangerzone2.shapeColor="red"
if(boy.isTouching(dangerzone)){
  //Gameover.addImage(gameoverImg) 
//Gameover.visible=true
console.log("indangerzone")
}
}