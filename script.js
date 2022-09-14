//parameters vast
var canvx = 650;
var canvy = 750;

//parameters changing
let gamestate = 0;

//parameters other
let ts1, ts2, ts3, text1, text2, text3, text4, text5, text6, img1, gif1;

//classes
class type1{
  constructor(x, y){
    this.x = x
    this.y = y
    this.vx = 1
  }

  draw(){
    image(giftype1, this.x, this.y, 22, 16)
    if(this.x + this.vx == 0 || this.x + this.vx == canvx-16){
      this.vx *= -1;
      this.y -= 30;
    }
  }
}

//functions


function preload() {
  ts1 = 70;
  ts2 = 16;
  ts3 = 25;
  text1 = "Start";
  text2 = "Tutorial";
  text3 = "Press escape to return to main menu";
  text4 = "Objective: Shoot the aliens";
  text5 = "Try to survive 2 rounds and kill the end boss"
  text6 = "Press escape to return to main menu";
  img1 = loadImage("assets/logo-si.png");
  giftype1 = loadImage("assets/invader-type-1.gif");
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
    textSize(ts3);
    text(text4, 50, 250);
    textSize(ts3);
    text(text5, 50, 285);
    textSize(ts3);
    text(text6, 50, 320);
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