class Photon {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector(-c, 0);
    this.history = [];
  }
  
  move() {
    this.history.push(this.pos.copy())
    const deltaV = this.vel.copy();
    deltaV.mult(dt);
    this.pos.add(deltaV);
    
    if(this.history.length > 500) {
      this.history.splice(0,1);
    }
  }
  
  show() {
    strokeWeight(7);
    stroke(255, 255, 0);
    point(this.pos.x, this.pos.y);
    
    noFill();
    strokeWeight(1);
    beginShape();
    for (let v of this.history) {
      vertex(v.x, v.y);
    }
    endShape();
  }
}