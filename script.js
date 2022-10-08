//parameters vast
var canvx = 650;
var canvy = 750;

//parameters changing
let gamestate = 0;
var vMult;
var invader_y = 30
var round1 = 0

//parameters other
let t1_ = []
let t2_ = []
let t3_ = []
var t1, player;
let ts1, ts2, ts3, ts4, text1, text2, text3, text4, text5, text6, text7, text8, img1, imgplayer1, imgbullet1, giftype1, giftype2, giftype3, gif1, song, font1;
//ts = textsize
//t = text

//functions

function preload() {
//ts = textsize 
  ts1 = 25;
  ts2 = 10;
  ts3 = 13;
  ts4 = 50;
  text1 = "Start";
  text2 = "Tutorial";
  text3 = "Press escape to return to main menu";
  text4 = "Objective: Shoot the aliens";
  text5 = "Try to survive 2 rounds and kill the end boss";
  text6 = "Press escape to return to main menu";
  text7 = "Game Over!";
  text8 = "Reload the browser to try again!"
  img1 = loadImage("assets/logo-si.png");
  imgplayer1 = loadImage("assets/Player.png");
  giftype1 = loadImage("assets/invader-type-1.gif");
  giftype2 = loadImage("assets/invader-type-2.gif");
  giftype3 = loadImage("assets/invader-type-3.gif");
  gif1 = loadImage("assets/space-invaders-gif.gif");
  imgbullet1 = loadImage("assets/bullet-player.png");
  song = loadSound("assets/music1.mp3");
  font1 = loadFont("assets/font1.ttf");
}

function setup() {
  createCanvas(canvx, canvy);
  if(round1 == 0){
    spawnloopround1()
  }
  song.loop()
  song.play();
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
  if (gamestate == 3) {
    gameover()
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
  textFont(font1); 
  text(text1, 115, 465);
  fill(200);
  rect(350, 400, 250, 100);
  fill(10);
  rect(360, 410, 230, 80);
  fill(255);
  text(text2, 375, 465);
  
}

function tutorial() {
  background(10);
  textSize(ts2);
  fill(225);
  textStyle(NORMAL);
  textSize(ts1);
  fill(0,191,255);
  rect(75,50,500,100);
  fill(225);
  textSize(ts4);
  text(text2, 120, 130);
  textSize(ts3);
  text(text4, 25, 250);
  textSize(ts3);
  text(text5, 25, 285);
  textSize(ts3);
  text(text6, 25, 320);
}

function run(){
  background(10);
  textSize(ts2);
  fill(225);
  textStyle(ITALIC);
  text(text3, 10, 20);
  t1_.forEach((a) => {
    a.draw()
  })
  t2_.forEach((b) => {
    b.draw()
  })
  t3_.forEach((c) => {
    c.draw()
  })
  //t1.draw()
  player.draw()
}

function gameover(){
  background(10);
  textSize(ts1);
  textStyle(NORMAL);
  text(text7, 125, 100);
  textSize(ts3);
  text(text8,75,200);
}

function keyPressed() {
  if (keyCode === ENTER) { //temp 
    gamestate = 3; 
  } 
  if (keyCode === ESCAPE) {
    gamestate = 0; 
  } 
  if (keyCode === LEFT_ARROW) {
    if (player.x > 0) {
      player.vx = -4;
    }
  }
  if (keyCode === RIGHT_ARROW) {
    if (player.x + 75 < 650) {
      player.vx = 4;
    }
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

function spawnloopround1() {
  vMult = 0.5
  for(let i = 0; i < 9; i++){
    t1_.push(new Type1([i]*((canvx-44)/9), 30, 1, 3))
  }
  for(let i = 0; i < 9; i++){
    t2_.push(new Type2([i]*((canvx-44)/9), 30, 2, 3))
  }
  for(let i = 0; i < 9; i++){
    t3_.push(new Type3([i]*((canvx-44)/9), 30, 3, 3))
  }
  //t1 = new Type1(10, 30);
  player = new Player(325, 600, 0)
}