var bird, background1Img, background1,birdImg,helicopterImg,helicopter,monsterImg,monster,pillarImg,pillar;
var helicopterGroup;
var pillarGroup;
var monsterGroup;

function preload(){
  background1Img=loadImage("images/background.jpeg");
  birdImg=loadImage("images/bird4.jpeg");
  pillarImg=loadImage("images/pillar2.jpeg");
  helicopterImg=loadImage("images/helicopter.png");
  monsterImg=loadImage("images/monster.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background1=createSprite(windowWidth/2,windowHeight/2 , windowWidth, windowHeight);
  background1.addImage(background1Img);
  background1.scale=5;

  bird=createSprite(windowWidth/3,windowHeight/3,windowWidth/2,windowHeight/2);
  bird.addImage(birdImg);
  bird.scale=0.5;

  helicopterGroup=new Group();
  pillarGroup=new Group();
  monsterGroup=new Group();


  
}

function draw() {
  background("white");  




  drawSprites();
}





