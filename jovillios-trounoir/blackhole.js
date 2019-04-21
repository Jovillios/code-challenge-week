class Blackhole {
  constructor(x, y, m) {
    this.pos = createVector(x,y);
    this.mass = m;
    this.rs = (2 * G * this.mass)/(c*c);
  }
  
  pull(photon) {
    let force = p5.Vector.sub(this.pos, photon.pos);
    let r = force.mag();
    let fg = 1.9 * (G * this.mass) / (r * r);
    force.setMag(fg);
    photon.vel.add(force);
    photon.vel.limit(c);
  }
  
  show() {
    noStroke();
    fill(0);
    circle(this.pos.x, this.pos.y, 2 * this.rs);
    
    stroke(255, 100, 10);
    strokeWeight(50);
    noFill(100);
    circle(this.pos.x, this.pos.y, 4 * this.rs);
  }
}