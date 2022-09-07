//parameters vast
var canvx = 650;
var canvy = 750;
var ts = 70;

//parameters changing
let gamestate = 0;

function setup() {
  createCanvas(canvx, canvy);
}

function draw() {
 
  background(10);
  textSize(ts);
  fill(200);
  rect(50, 400, 250, 100);
  fill(10);
  rect(60, 410, 230, 80);
  fill(255);
  text("Start", 100, 475)
  fill(200);
  rect(350, 400, 250, 100);
  fill(10);
  rect(360, 410, 230, 80);
  fill(255);
  text("Tutorial", 360, 475)
  if (gamestate == 1) {
    background(100);
    if (mouseButton == RIGHT) {
      gamestate = 0;
    }
  }
  if (gamestate == 2) {
    background(255);
    if (mouseButton == RIGHT) {
      gamestate = 0;
    }
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