//parameters vast
var canvx = 650;
var canvy = 750;

//parameters changing
let gamestate = 0;
var vMult = 1;

//parameters other
let t1_ = []
var t1, player;
let ts1, ts2, ts3, text1, text2, text3, text4, text5, text6, img1, imgplayer1, gif1;

//classes
class Type1{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.vx = 0;
  }

  draw(){
    let tV = this.vx * vMult;
    if(this.x + tV < 0 || this.x + tV > canvx-44){
      this.vx *= -1;
      this.y += 30;
    }
    image(giftype1, this.x, this.y, 44, 32)
    this.x += tV;
  }
}

class Player{
  constructor(x, y, vx){
    this.x = x;
    this.y = y;
    this.vx = vx;
  }

  draw(){
    this.x += this.vx;
    image(imgplayer1, this.x, this.y, 75, 75);
    if (this.x >= 0 && this.x + 50 <= 650) {
      this.x += this.vx;
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
  imgplayer1 = loadImage("assets/Player.png");
  giftype1 = loadImage("assets/invader-type-1.gif");
  gif1 = loadImage("assets/space-invaders-gif.gif");
}

function setup() {
  createCanvas(canvx, canvy);
  newgame()
}

function draw() {
  if (gamestate == 0) {
    menu()
  }
  if (gamestate == 1) {
    run()
  }
  if (gamestate == 2) {
    tutorial()
  }
}

function menu() {
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
  
}

function tutorial() {
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

function newgame() {
  for(let i = 0; i < 9; i++){
    t1_.push(new Type1([i]*((canvx-44)/9), 30))
  }
  t1 = new Type1(10, 30);
  player = new Player(325, 600, 0)
}
function run(){
  background(100);
  textSize(ts2);
  fill(225);
  textStyle(ITALIC);
  text(text3, 10, 20);
  for(let i = 0; i < t1_.length; i++){
    t1_[i].draw()
  }
  //t1.draw()
  player.draw()
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    gamestate = 0; 
  } 
  if (keyCode === LEFT_ARROW) {
    player.vx = -2;
  }
  if (keyCode === RIGHT_ARROW) {
    player.vx = 2;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    player.vx = 0;
  }
  if (keyCode === RIGHT_ARROW) {
    player.vx = 0;
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