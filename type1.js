class Type1{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.vx = 1;
  }

  draw(){
    let tV = this.vx * vMult;
    if(this.x + tV < 0 || this.x + tV > canvx-44){
      this.vx *= -1;
      this.y += 50;
    }
    image(giftype1, this.x, this.y, 44, 32);
    this.x += tV;
  }
}