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

function toRadian(angle) {
	return angle * Math.PI / 180;
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomGreyHex() {
	var v = (Math.random() * (10) | 0).toString(16);
	return "#" + v + v + v;
}

var minSpeed = 2;
var maxSpeed = 6;

var minSize = 21;
var maxSize = 29;

var aszteroidak = [];

let ero = 1;

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
			aszteroidaObj.color = randomGreyHex();
		}
		else if (oldal == 2) { // right
			aszteroidaObj.posx = canvasWidth + aszteroidaObj.meret * 2;
			aszteroidaObj.posy = randomInt(0, canvasHeight);
			aszteroidaObj.direction = toRadian(randomInt(135, 225));
			aszteroidaObj.speed = randomInt(minSpeed, maxSpeed);
			aszteroidaObj.meret = randomInt(minSize, maxSize);
			aszteroidaObj.color = randomGreyHex();
		}
		else if (oldal == 3) { // bottom
			aszteroidaObj.posx = randomInt(0, canvasWidth);
			aszteroidaObj.posy = canvasHeight + aszteroidaObj.meret * 2;
			aszteroidaObj.direction = toRadian(randomInt(225, 315));
			aszteroidaObj.speed = randomInt(minSpeed, maxSpeed);
			aszteroidaObj.meret = randomInt(minSize, maxSize);
			aszteroidaObj.color = randomGreyHex();
		}
		else if (oldal == 4) { // left
			aszteroidaObj.posx = 0 - aszteroidaObj.meret * 2;
			aszteroidaObj.posy = randomInt(0, canvasHeight);
			aszteroidaObj.direction = toRadian(randomInt(-45, 45));
			aszteroidaObj.speed = randomInt(minSpeed, maxSpeed);
			aszteroidaObj.meret = randomInt(minSize, maxSize);
			aszteroidaObj.color = randomGreyHex();
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
}

function refreshCanvas() {
	var c = document.getElementById("game-canvas");
	var ctx = c.getContext("2d");
	var canvasHeight = c.offsetHeight;
	var canvasWidth = c.offsetWidth;
	ctx.clearRect(0, 0, canvasHeight, canvasWidth);
	updateObjects();
	for (var i = 0; i < aszteroidak.length; i++) {
		ctx.beginPath();
		ctx.arc(aszteroidak[i].posx, aszteroidak[i].posy, aszteroidak[i].meret, 0, 2 * Math.PI);
		ctx.fillStyle = aszteroidak[i].color;
		ctx.fill();
		ctx.font = aszteroidak[i].meret + "px Arial";
		ctx.fillStyle = "white";
		ctx.fillText(aszteroidak[i].meret - 20, aszteroidak[i].posx - aszteroidak[i].meret / 3.2, aszteroidak[i].posy + aszteroidak[i].meret / 3);
	}
}

var myVar = setInterval(refreshCanvas, 30);

function init() {
	for (var i = 0; i < 20; i++) {
		let posx = randomInt(0, 800);
		let posy = randomInt(0, 800);
		let szin = randomGreyHex();
		let irany = toRadian(randomInt(0, 360));
		let sebesseg = randomInt(minSpeed, maxSpeed);
		let meret = randomInt(minSize, maxSize);
		aszteroidak.push(new aszteroida(posx, posy, szin, irany, sebesseg, meret));
	}
}

function canvasClick(event) {
	let x = event.offsetX;
	let y = event.offsetY;
	for (let i = 0; i < aszteroidak.length; i++) {
		if (Math.sqrt((x - aszteroidak[i].posx) ** 2 + (y - aszteroidak[i].posy) ** 2) <= aszteroidak[i].meret) {
			if (aszteroidak[i].meret > 20) {
				let scoreElem = document.getElementById("score");
				let currentScore = parseInt(scoreElem.innerText);
				if (aszteroidak[i].meret - ero < 20) {
					currentScore += (aszteroidak[i].meret - 20);
				}
				else {
					currentScore += ero;
				}
				scoreElem.innerText = currentScore;
				aszteroidak[i].meret -= ero;
				if (aszteroidak[i].meret < 20) {
					aszteroidak[i].meret = 20;
				}
				break;
			}

		}
	}
}

function eroPlus() {
	let scoreElem = document.getElementById("score");
	let currentScore = parseInt(scoreElem.innerText);
	if (ero < 10 && currentScore >= 10) {
		ero += 1;
		currentScore -= 10;
		scoreElem.innerText = currentScore;
	}
}


