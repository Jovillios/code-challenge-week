import peasy.*;

PeasyCam cam;

float rollX = 0;
float rollY = 0;
float rollZ = 0;
int nbRollX;
int nbRollY;
int nbRollZ;
float z = 0;
float t = 0;

void setup() {
  size(640,640, P3D);
  cam = new PeasyCam(this, 0);
  nbRollX = round(random(0, 12));
  nbRollY = round(random(0, 12));
  nbRollZ = round(random(0, 12));
}

void draw() {
  background(0);
  translate(width/2, height/2);
  fill(123);
  translate(0, 0, -1000);
  rect(-2000, -2000, 4000, 4000);
  translate(0, 0, 1000-parseInt(z));
  rotateX(rollX);
  rotateY(rollY);
  rotateZ(rollZ);
  stroke(0);
  fill(200);
  box(200); // Cube
  
  fill(0);
  noStroke();
  // 1
  translate(0, 0, 101);
  ellipse(0, 0, 25, 25);
  // 6
  translate(0, 0, -202);
  ellipse(-50, 50, 25, 25);
  ellipse(-50, 0, 25, 25);
  ellipse(-50, -50, 25, 25);
  ellipse(50, 50, 25, 25);
  ellipse(50, 0, 25, 25);
  ellipse(50, -50, 25, 25);
  
  // 2
  translate(0, 101, 101);
  rotateX(PI/2);
  ellipse(-50, -50, 25, 25);
  ellipse(50, 50, 25, 25); 
  
  // 5
  translate(0, 0, 202);
  ellipse(0, 0, 25, 25);
  ellipse(-50, -50, 25, 25);
  ellipse(50, -50, 25, 25);
  ellipse(50, 50, 25, 25);
  ellipse(-50, 50, 25, 25);
  
  // 3
  translate(101, 0, -101);
  rotateY(PI/2);
  ellipse(0, 0, 25, 25);
  ellipse(-50, -50, 25, 25);
  ellipse(50, 50, 25, 25);
  
  // 4
  translate(0, 0, -202);
  ellipse(50, 50, 25, 25);
  ellipse(50, -50, 25, 25);
  ellipse(-50, 50, 25, 25);
  ellipse(-50, -50, 25, 25);

  if(rollX < nbRollX*PI/2) {
    rollX += (nbRollX*PI/2) / 500;
  }
  if(rollY < nbRollY*PI/2) {
    rollY += (nbRollY*PI/2) / 500;
  }
  if(rollZ < nbRollZ*PI/2) {
    rollZ += (nbRollZ*PI/2) / 500;
  }
  
  if(z < 900) {
    z += t*t;
    t += 0.01;
  }

}
