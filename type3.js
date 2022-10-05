class Type3{
  constructor(x, y, ychange){
    this.x = x;
    this.y = invader_y+ychange;
    this.vx = 1;
  }

  draw(){
    let tV = this.vx * vMult;
    if(this.x + tV < -88 || this.x + tV > canvx+44){
      this.vx *= -1;
      this.y += 80;
    }
    image(giftype3, this.x, this.y, 44, 32);
    this.x += tV;
  }
}