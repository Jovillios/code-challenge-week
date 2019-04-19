let weight = 1280;
let height = 640;

let heure = 9;
let minute = 12;

let numberRain = 100;
let numberCloud = 10;
let boolRain = false;

let rain = [];
let cloud = [];


function setup() {
	createCanvas(weight, height);
	if(boolRain == true) {
		for(let i=0; i<numberRain; i++) {
 			rain[i] = new Rain();
 		}
 	}

 	for(let i=0; i<numberCloud; i++) {
 		cloud[i] = new Cloud();
 	}

}

function draw() {

	let bgColor;
	let cloudColor;

	let jour;

	if(heure >= 19 || heure <= 7) {
		jour = false;
	}
	else {
		jour = true;
	}

	if(jour) {
		bgColor = color(137, 235, 255);
		cloudColor = color(255, 255, 255);
	}
	else {
		bgColor = color(0, 0, 0);
		cloudColor = color(200, 200, 200);
	}

	background(bgColor);

	if(jour) {
		fill(255, 255, 0)
		ellipse(100, 100, 100, 100)
	}
	else {
		fill(255);
		ellipse(100, 100, 100, 100);
		fill(bgColor);
		ellipse(130, 130, 100, 100);
	}

	if (boolRain == true) {
		for(let i=0; i<numberRain; i++)
		{
			rain[i].fall();
			rain[i].show();
		}
	}

 	for(let i=0; i<numberCloud; i++) {
 		cloud[i].move();
 		cloud[i].show(cloudColor);
 	}

	textAlign(CENTER);
	textFont('Ebrima')
	textSize(60);

 	if(!boolRain) {
 		text("Beau Temps", 640 ,450);
 	}
 	else {
 		text("Mauvais Temps", 640 ,450);		
 	}

 	text(`${heure} : ${minute}`, 640, 550);
}

class Rain {
	constructor() {
		this.angle = PI/3;
		this.speed = random(1, 5) / sin(this.angle);
		this.x = random(round(-this.speed*cos(this.angle)* 100), 1280);
		this.y = random(0, 200);
	}

	show() {
		stroke(66, 134, 244);
		line(this.x, this.y, this.x + 20*cos(this.angle), this.y+20*sin(this.angle));
	}

	fall() {
		if(this.y >= 600) {
			this.speed = random(1, 5) / sin(this.angle);
			this.x = random(round(-this.speed*cos(this.angle)* 100), 1280);
			this.y = random(0, 200);
		}
		this.y = this.y + this.speed * sin(this.angle);
		this.x = this.x + this.speed * cos(this.angle);
	}
}

class Cloud {
	constructor() {
		this.speed = random(1, 5);
		this.x = random(round(-this.speed) * 100, 600);
		this.y = random(50, 200);
		this.size = 100;
		this.r1x = random(-this.size/1.5, this.size/1.5);
		this.r1y = random(-this.size/3, this.size/3);
		this.r2x = random(-this.size/1.5, this.size/1.5);
		this.r2y = random(-this.size/3, this.size/3);
		this.r3x = random(-this.size/1.5, this.size/1.5);
		this.r3y = random(-this.size/3, this.size/3);
	}

	show(cloudColor) {
		fill(cloudColor);
		noStroke();
		ellipse(this.x, this.y, this.size, this.size);
		ellipse(this.x + this.r1x, this.y + this.r1y, this.size, this.size);
		ellipse(this.x + this.r2x, this.y + this.r2y, this.size, this.size);
		ellipse(this.x + this.r3x, this.y + this.r3y, this.size, this.size);
	}

	move() {
		if(this.x >= 1250) {
			this.speed = random(1, 5);
			this.x = random(round(-this.speed) * 100, 600);
			this.y = random(50, 200);
			this.size = 100;
			this.r1x = random(-this.size/2, this.size/2);
			this.r1y = random(-this.size/3, this.size/3);
			this.r2x = random(-this.size/2, this.size/2);
			this.r2y = random(-this.size/3, this.size/3);
			this.r3x = random(-this.size/2, this.size/2);
			this.r3y = random(-this.size/3, this.size/3);		
		}
		this.x = this.x + this.speed;
	}
}