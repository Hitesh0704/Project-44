var  gameState=0;
var startButton;

function preload(){
 bg1=loadImage("pictures/bg.jpg");

}

function setup(){
 createCanvas(windowWidth-25,windowHeight-25);

}

function draw() {

if(gameState==0){
  background(bg1);
  textSize(46);
  textFont("Felix");
  fill("black");
  textStyle("Bold");
  text("Welcome to Mini FootBall Game",windowWidth/2-300,windowHeight/2);
  
  startButton=createButton("Start");
  startButton.show();
  startButton.style("width","100px");
  startButton.style("background","orange");
  startButton.position(windowWidth/2,windowHeight/2+50);
  
  startButton.mousePressed(()=>{
    gameState=1;
     startButton.hide();
  });
}
if(gameState==1){
  background("green");
  
}
  


}