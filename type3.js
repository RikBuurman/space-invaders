class Type3{
  constructor(x, y, row, tr){
    this.x = x;
    this.y = invader_y+(row-1)*40;
    this.vx = 1;
    this.totalrow = tr;
  }

  draw(){
    let tV = this.vx * vMult;
    if(this.x + tV < -88 || this.x + tV > canvx+44){
      this.vx *= -1;
      this.y += this.totalrow*40;
      if(this.y > 525){
        gamestate = 3
      }
    }
    image(giftype3, this.x, this.y, 44, 32);
    this.x += tV;
  }
}