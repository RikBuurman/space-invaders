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
let ts1, ts2, ts3, text1, text2, text3, text4, text5, text6, img1, imgplayer1, imgbullet1, giftype1, giftype2, giftype3, gif1, song;
//ts = textsize
//t = text


//functions

function preload() {
//ts = textsize 
  ts1 = 70;
  ts2 = 16;
  ts3 = 25;
  text1 = "Start";
  text2 = "Tutorial";
  text3 = "Press escape to return to main menu";
  text4 = "Objective: Shoot the aliens";
  text5 = "Try to survive 2 rounds and kill the end boss";
  text6 = "Press escape to return to main menu";
  img1 = loadImage("assets/logo-si.png");
  imgplayer1 = loadImage("assets/Player.png");
  giftype1 = loadImage("assets/invader-type-1.gif");
  giftype2 = loadImage("assets/invader-type-2.gif");
  giftype3 = loadImage("assets/invader-type-3.gif");
  gif1 = loadImage("assets/space-invaders-gif.gif");
  imgbullet1 = loadImage("assets/bullet-player.png");
  //song = loadSound("assets/music1.mp3");
}

function setup() {
  createCanvas(canvx, canvy);
  if(round1 == 0){
    spawnloopround1()
  }
  //song.loop()
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
  //song.play();
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

function run(){
  background(100);
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

function keyPressed() {
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