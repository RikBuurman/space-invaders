//parameters vast
var canvx = 650;
var canvy = 750;
var ts1 = 70;
var ts2 = 16

//parameters changing
let gamestate = 0;

//parameters other
let text1, text2, text3, img1, gif1;

function preload() {
  text1 = "start";
  text2 = "Tutorial";
  text3 = "Press escape to return to main menu"
  img1 = loadImage("assets/logo_si.png");
  gif1 = loadImage("assets/space-invaders-gif.gif");
}

function setup() {
  createCanvas(canvx, canvy);
}

function draw() {
  background(10);
  image(img1, 140, 100, 370, 126)
  image(gif1, 199.5, 524.5)
  textSize(ts1);
  textStyle(NORMAL);
  fill(200);
  rect(50, 400, 250, 100);
  fill(10);
  rect(60, 410, 230, 80);
  fill(255);
  text(text1, 100, 475);
  fill(200);
  rect(350, 400, 250, 100);
  fill(10);
  rect(360, 410, 230, 80);
  fill(255);
  text(text2, 360, 475);
  if (gamestate == 1) {
    background(100);
    textSize(ts2);
    fill(225);
    textStyle(ITALIC)
    text(text3, 10, 20)
  }
  if (gamestate == 2) {
    background(10);
    textSize(ts2);
    fill(225);
    textStyle(ITALIC)
    text(text3, 10, 20)
    textStyle(NORMAL);
    textSize(ts1);
    fill(0,191,255);
    rect(75,50,500,100);
    fill(225);
    text(text2, 200, 125);

  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    gamestate = 0; 
  }
}


function mouseClicked() {
  if (gamestate == 0){
    if(mouseX < 300 && mouseX > 50){
      if(mouseY <500 && mouseY > 400){
        gamestate = 1;
      }
    }
    if(mouseX < 550 && mouseX > 350){
      if(mouseY < 500 && mouseY > 400){
        gamestate = 2; 
      }
    }
  }
}