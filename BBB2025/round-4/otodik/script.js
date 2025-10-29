class aszteroida {
	constructor(posx, posy, color, direction, speed, meret) {
		this.posx = posx;
		this.posy = posy;
		this.color = color;
		this.direction = direction;
		this.speed = speed;
		this.meret = meret;
	}
}

class rezes {
	constructor(posx, posy, color, direction, speed, meret) {
		this.posx = posx;
		this.posy = posy;
		this.color = color;
		this.direction = direction;
		this.speed = speed;
		this.meret = meret;
	}
}

function toRadian(angle) {
	return angle * Math.PI / 180;
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var minSpeed = 2;
var maxSpeed = 4;

var minSize = 21;
var maxSize = 39;

var aszteroidak = [];

var rezesek = [];

let egerx = 0;
let egery = 0;

let rajta = false;



function aszteroidaMozgas(aszteroidaObj, canvasWidth, canvasHeight) {
	var xMinimum = aszteroidaObj.meret;
	var xMaximum = canvasWidth - aszteroidaObj.meret;
	var yMinimum = aszteroidaObj.meret;
	var yMaximum = canvasHeight - aszteroidaObj.meret;
	var xChange = aszteroidaObj.speed * Math.cos(aszteroidaObj.direction);
	var yChange = aszteroidaObj.speed * Math.sin(aszteroidaObj.direction);
	aszteroidaObj.posx += xChange;
	aszteroidaObj.posy += yChange;
	if (aszteroidaObj.posx < xMinimum - aszteroidaObj.meret * 4 ||
		aszteroidaObj.posx > xMaximum + aszteroidaObj.meret * 4 ||
		aszteroidaObj.posy < yMinimum - aszteroidaObj.meret * 4 ||
		aszteroidaObj.posy > yMaximum + aszteroidaObj.meret * 4) {
		let oldal = randomInt(1, 4);
		if (oldal == 1) { // top
			aszteroidaObj.posx = randomInt(0, canvasWidth);
			aszteroidaObj.posy = 0 - aszteroidaObj.meret * 2;
			aszteroidaObj.direction = toRadian(randomInt(45, 135));
			aszteroidaObj.speed = randomInt(minSpeed, maxSpeed);
			aszteroidaObj.meret = randomInt(minSize, maxSize);
			aszteroidaObj.color = "#666";
		}
		else if (oldal == 2) { // right
			aszteroidaObj.posx = canvasWidth + aszteroidaObj.meret * 2;
			aszteroidaObj.posy = randomInt(0, canvasHeight);
			aszteroidaObj.direction = toRadian(randomInt(135, 225));
			aszteroidaObj.speed = randomInt(minSpeed, maxSpeed);
			aszteroidaObj.meret = randomInt(minSize, maxSize);
			aszteroidaObj.color = "#666";
		}
		else if (oldal == 3) { // bottom
			aszteroidaObj.posx = randomInt(0, canvasWidth);
			aszteroidaObj.posy = canvasHeight + aszteroidaObj.meret * 2;
			aszteroidaObj.direction = toRadian(randomInt(225, 315));
			aszteroidaObj.speed = randomInt(minSpeed, maxSpeed);
			aszteroidaObj.meret = randomInt(minSize, maxSize);
			aszteroidaObj.color = "#666";
		}
		else if (oldal == 4) { // left
			aszteroidaObj.posx = 0 - aszteroidaObj.meret * 2;
			aszteroidaObj.posy = randomInt(0, canvasHeight);
			aszteroidaObj.direction = toRadian(randomInt(-45, 45));
			aszteroidaObj.speed = randomInt(minSpeed, maxSpeed);
			aszteroidaObj.meret = randomInt(minSize, maxSize);
			aszteroidaObj.color = "#666";
		}
	}
}

function rezesMozgas(rezesObj, canvasWidth, canvasHeight) {
	var xMinimum = rezesObj.meret;
	var xMaximum = canvasWidth - rezesObj.meret;
	var yMinimum = rezesObj.meret;
	var yMaximum = canvasHeight - rezesObj.meret;
	var xChange = rezesObj.speed * Math.cos(rezesObj.direction);
	var yChange = rezesObj.speed * Math.sin(rezesObj.direction);
	rezesObj.posx += xChange;
	rezesObj.posy += yChange;
	if (rezesObj.posx < xMinimum - rezesObj.meret * 4 ||
		rezesObj.posx > xMaximum + rezesObj.meret * 4 ||
		rezesObj.posy < yMinimum - rezesObj.meret * 4 ||
		rezesObj.posy > yMaximum + rezesObj.meret * 4) {
		let oldal = randomInt(1, 4);
		if (oldal == 1) { // top
			rezesObj.posx = randomInt(0, canvasWidth);
			rezesObj.posy = 0 - rezesObj.meret * 2;
			rezesObj.direction = toRadian(randomInt(45, 135));
			rezesObj.speed = randomInt(minSpeed, maxSpeed);
			rezesObj.meret = randomInt(minSize, maxSize);
			rezesObj.color = "#B87333";
		}
		else if (oldal == 2) { // right
			rezesObj.posx = canvasWidth + rezesObj.meret * 2;
			rezesObj.posy = randomInt(0, canvasHeight);
			rezesObj.direction = toRadian(randomInt(135, 225));
			rezesObj.speed = randomInt(minSpeed, maxSpeed);
			rezesObj.meret = randomInt(minSize, maxSize);
			rezesObj.color = "#B87333";
		}
		else if (oldal == 3) { // bottom
			rezesObj.posx = randomInt(0, canvasWidth);
			rezesObj.posy = canvasHeight + rezesObj.meret * 2;
			rezesObj.direction = toRadian(randomInt(225, 315));
			rezesObj.speed = randomInt(minSpeed, maxSpeed);
			rezesObj.meret = randomInt(minSize, maxSize);
			rezesObj.color = "#B87333";
		}
		else if (oldal == 4) { // left
			rezesObj.posx = 0 - rezesObj.meret * 2;
			rezesObj.posy = randomInt(0, canvasHeight);
			rezesObj.direction = toRadian(randomInt(-45, 45));
			rezesObj.speed = randomInt(minSpeed, maxSpeed);
			rezesObj.meret = randomInt(minSize, maxSize);
			rezesObj.color = "#B87333";
		}
	}
}

function updateObjects() {
	var c = document.getElementById("game-canvas");
	var ctx = c.getContext("2d");
	var canvasHeight = c.offsetHeight;
	var canvasWidth = c.offsetWidth;
	for (var index = 0; index < aszteroidak.length; index++) {
		aszteroidaMozgas(aszteroidak[index], canvasWidth, canvasHeight);
	}
	for (var index = 0; index < rezesek.length; index++) {
		rezesMozgas(rezesek[index], canvasWidth, canvasHeight);
	}

}

function refreshCanvas() {
	var c = document.getElementById("game-canvas");
	var ctx = c.getContext("2d");
	var canvasHeight = c.offsetHeight;
	var canvasWidth = c.offsetWidth;
	ctx.clearRect(0, 0, canvasHeight, canvasWidth);
	updateObjects();
	for (var i = 0; i < aszteroidak.length; i++) {
		if (Math.sqrt((egerx - aszteroidak[i].posx) ** 2 + (egery - aszteroidak[i].posy) ** 2) <= aszteroidak[i].meret + 150) {
			ctx.beginPath();
			ctx.arc(aszteroidak[i].posx, aszteroidak[i].posy, aszteroidak[i].meret, 0, 2 * Math.PI);
			ctx.fillStyle = aszteroidak[i].color;
			ctx.fill();
		}
	}
	for (var i = 0; i < rezesek.length; i++) {
		if (Math.sqrt((egerx - rezesek[i].posx) ** 2 + (egery - rezesek[i].posy) ** 2) <= rezesek[i].meret + 150) {
			ctx.beginPath();
			ctx.arc(rezesek[i].posx, rezesek[i].posy, rezesek[i].meret, 0, 2 * Math.PI);
			ctx.fillStyle = rezesek[i].color;
			ctx.fill();
		}
	}
	if (rajta) {
		ctx.beginPath();
		ctx.arc(egerx, egery, 10, 0, 2 * Math.PI);
		ctx.strokeStyle = "red";
		ctx.lineWidth = 2;
		ctx.stroke();
	}

	requestAnimationFrame(refreshCanvas);
}

function init() {
	for (var i = 0; i < 10; i++) {
		let posx = randomInt(0, 800);
		let posy = randomInt(0, 800);
		let szin = "#666";
		let irany = toRadian(randomInt(0, 360));
		let sebesseg = randomInt(minSpeed, maxSpeed);
		let meret = randomInt(minSize, maxSize);
		aszteroidak.push(new aszteroida(posx, posy, szin, irany, sebesseg, meret));
	}

	for (var i = 0; i < 10; i++) {
		let posx = randomInt(0, 800);
		let posy = randomInt(0, 800);
		let szin = "#B87333";
		let irany = toRadian(randomInt(0, 360));
		let sebesseg = randomInt(minSpeed, maxSpeed);
		let meret = randomInt(minSize, maxSize);
		rezesek.push(new aszteroida(posx, posy, szin, irany, sebesseg, meret));
	}

	requestAnimationFrame(refreshCanvas);
}

function canvasClick(event) {
	let x = event.offsetX;
	let y = event.offsetY;

	for (let i = 0; i < rezesek.length; i++) {
		if (Math.sqrt((x - rezesek[i].posx) ** 2 + (y - rezesek[i].posy) ** 2) <= rezesek[i].meret + 10) {
			if (rezesek[i].color == "#B87333") {
				let scoreElem = document.getElementById("score");
				let currentScore = parseInt(scoreElem.innerText);
				currentScore += 1;
				scoreElem.innerText = currentScore;
				rezesek[i].color = "#666"
			}
		}
	}



}

function rajtaVan(e) {
	if (e == 1) {
		rajta = true;
	}
	else {
		rajta = false;
		egerx = -150;
		egery = -150;
	}
}

function egerMozgas(event) {
	egerx = event.offsetX;
	egery = event.offsetY;
}