let t = 0.01;
let x = 320;
let y = 320;
let vx = 0;
let vy = 0;
let ax = 0;
let ay = 0;
let a = 0;
let vmax = 2000;
let vmin = 300;

function setup() {
	createCanvas(1280, 640);
}
		
function draw() {

	background(152, 228, 255);

	// CALCULE VITESSE
	let v = sqrt(vx*vx + vy*vy);


	let n = dist(x, y, mouseX, mouseY);
	let dx = (mouseX-x) / n;  // Compris entre -1 et 1
	let dy = (mouseY-y) / n;

	ax = a * dx;
	ay = a * dy;

	vx = 300 * dx + ax * t;
	vy = 300 * dy + ay * t;

	
	if(mouseIsPressed) {
		a += (vmax - v);
	}
	else {
			a -= (v - vmin);
	}

	// AFFICHAGE VITESSE

	textSize(20);
	fill(255);
	text('Vitesse:', 10, 20);

	if(v < 300) {
		v = 300;
	}

	text(int(v), 100, 20);


	translate(x, y);
	rotate(atan2(vy, vx));

	fill(255);
	// AVION
	beginShape();
	vertex(60, 0);
	vertex(40, -10 );
	vertex(-20, -10 );
	vertex(-30, -25 );
	vertex(-40, -25);
	vertex(-40, 0 );
	vertex(-50, 15 );
	vertex(-40, 15 );
	vertex(-25, 0 );
	vertex(-30, 5 );
	//AILE
	vertex(0, 10);
	vertex(0, 5);
	vertex(0, 30);
	vertex(15, 30);
	vertex(35, 5);
	vertex(31, 10);
	//FIN AILE
	vertex(40, 10);
	vertex(60, 0);
	endShape();
	// AILE ARRIERE
	beginShape();
	vertex(30, -10);
	vertex(15, -20);
	vertex(0, -20);
	vertex(0, -10);
	vertex(30, -10);
	endShape();
	// FIN AVION

	// INCREMENTS


	x += vx*t;
	y += vy*t;

}