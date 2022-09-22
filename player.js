class Player{
  constructor(x, y, vx){
    this.x = x;
    this.y = y;
    this.vx = vx;
  }

  draw(){
    image(imgplayer1, this.x, this.y, 75, 75);
    if (this.x + this.vx > 0 && this.x + 75 + this.vx < 650) {
      this.x += this.vx
    }
  }
}