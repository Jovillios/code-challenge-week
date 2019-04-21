const G = 6;
const c = 3;
const dt = 0.5;

let m81;

let photonArray = [];

function setup() {
  createCanvas(1200, 600);
  m81 = new Blackhole(width/2, height/2, 20);
  let start = height/2;
  let end = height/2 - 10*m81.rs;
  for(let y = end; y <  start; y+=10) {
  photonArray.push(new Photon(width - 20, y));
  }
}

function draw() {
  background(220);
  
  m81.show();
  
  for (let p of photonArray) {
    m81.pull(p);
    if(dist(p.pos.x, p.pos.y, m81.pos.x, m81.pos.y) > 2*m81.rs)
    { 
      p.move();
      p.show();
    }
  }
}