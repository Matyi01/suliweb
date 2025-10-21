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

class banya {
	constructor(posx, posy) {
		this.posx = posx;
		this.posy = posy;
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
var maxSpeed = 4;

var minSize = 21;
var maxSize = 39;

var aszteroidak = [];

let banyak = [];

let banyaLerak = false;

let ero = 1;
let sugar = 1;

let banyaEro = 1;

let egerx = 0;
let egery = 0;

let banyaSpeed = 1000; // milliszekundum

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

function egerMozgas(event) {
	egerx = event.offsetX;
	egery = event.offsetY;
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
		ctx.textAlign = "center"
		ctx.fillStyle = "white";
		ctx.fillText(aszteroidak[i].meret - 20, aszteroidak[i].posx, aszteroidak[i].posy + aszteroidak[i].meret / 3);
	}
	for (let j = 0; j < banyak.length; j++) {
		ctx.beginPath();
		ctx.rect(banyak[j].posx - 15, banyak[j].posy - 15, 30, 30);
		ctx.fillStyle = "brown";
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(banyak[j].posx, banyak[j].posy, 100, 0, 2 * Math.PI);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.stroke();
	}
	if (rajta) {
		if (banyaLerak) {
			ctx.beginPath();
			ctx.rect(egerx - 15, egery - 15, 30, 30);
			ctx.fillStyle = "brown";
			ctx.fill();
			ctx.strokeStyle = "black";
			ctx.lineWidth = 2;
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(egerx, egery, 100, 0, 2 * Math.PI);
			ctx.strokeStyle = "black";
			ctx.lineWidth = 1;
			ctx.stroke();
		}
		if (!banyaLerak) {
			ctx.beginPath();
			ctx.arc(egerx, egery, sugar * 10, 0, 2 * Math.PI);
			ctx.strokeStyle = "red";
			ctx.lineWidth = 2;
			ctx.stroke();
		}
	}


	requestAnimationFrame(refreshCanvas);

}

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
	document.getElementById("ero").innerText = ero;
	document.getElementById("sugar").innerText = sugar;
	document.getElementById("banya").innerText = banyak.length;
	document.getElementById("banyaEro").innerText = banyaEro;
	document.getElementById("banyaSpeed").innerText = banyaSpeed;

	requestAnimationFrame(refreshCanvas);
}

function banyaszat() {
	for (let j = 0; j < banyak.length; j++) {
		for (let i = 0; i < aszteroidak.length; i++) {
			if (Math.sqrt((banyak[j].posx - aszteroidak[i].posx) ** 2 + (banyak[j].posy - aszteroidak[i].posy) ** 2) <= 100 + aszteroidak[i].meret) {
				if (aszteroidak[i].meret > 20) {
					let scoreElem = document.getElementById("score");
					let currentScore = parseInt(scoreElem.innerText);
					if (aszteroidak[i].meret - banyaEro < 20) {
						currentScore += (aszteroidak[i].meret - 20);
					}
					else {
						currentScore += banyaEro;
					}
					scoreElem.innerText = currentScore;
					aszteroidak[i].meret -= banyaEro;
					if (aszteroidak[i].meret < 20) {
						aszteroidak[i].meret = 20;
					}
				}
			}
		}
	}
}

function canvasClick(event) {
	let x = event.offsetX;
	let y = event.offsetY;
	if (!banyaLerak) {
		for (let i = 0; i < aszteroidak.length; i++) {
			if (Math.sqrt((x - aszteroidak[i].posx) ** 2 + (y - aszteroidak[i].posy) ** 2) <= aszteroidak[i].meret + sugar * 10) {
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
				}
			}
		}
	}
	else {
		let scoreElem = document.getElementById("score");
		let currentScore = parseInt(scoreElem.innerText);
		if (banyak.length < 20 && currentScore >= 200) {
			banyak.push(new banya(x, y));
			currentScore -= 200;
			scoreElem.innerText = currentScore;
			document.getElementById("banya").innerText = banyak.length;
		}
		banyaLerak = false;
	}

}

function eroPlus() {
	let scoreElem = document.getElementById("score");
	let currentScore = parseInt(scoreElem.innerText);
	if (ero < 10 && currentScore >= 10) {
		ero += 1;
		currentScore -= 10;
		scoreElem.innerText = currentScore;
		document.getElementById("ero").innerText = ero;
	}
}

function sugarPlus() {
	let scoreElem = document.getElementById("score");
	let currentScore = parseInt(scoreElem.innerText);
	if (sugar < 20 && currentScore >= 20) {
		sugar += 1;
		currentScore -= 20;
		scoreElem.innerText = currentScore;
		document.getElementById("sugar").innerText = sugar;
	}
}

function banyaPlus() {
	if (!banyaLerak && banyak.length < 20 && parseInt(document.getElementById("score").innerText) >= 200) {
		banyaLerak = true;
	}
	else {
		banyaLerak = false;
	}
}

function banyaEroPlus() {
	let scoreElem = document.getElementById("score");
	let currentScore = parseInt(scoreElem.innerText);
	if (banyaEro < 10 && currentScore >= 100) {
		banyaEro += 1;
		currentScore -= 100;
		scoreElem.innerText = currentScore;
		document.getElementById("banyaEro").innerText = banyaEro;
	}
}

let ismetles = setInterval(banyaszat, banyaSpeed);


function banyaSpeedPlus() {
	let scoreElem = document.getElementById("score");
	let currentScore = parseInt(scoreElem.innerText);
	if (banyaSpeed > 100 && currentScore >= 1000) {
		banyaSpeed -= 100;
		clearInterval(ismetles);
		ismetles = setInterval(banyaszat, banyaSpeed)
		currentScore -= 1000;
		scoreElem.innerText = currentScore;
		document.getElementById("banyaSpeed").innerText = banyaSpeed;
	}
}

function magnesPlus() {
	//több aszteroida


		let scoreElem = document.getElementById("score");
	let currentScore = parseInt(scoreElem.innerText);
	if (banyaSpeed > 100 && currentScore >= 1000) {
		banyaSpeed -= 100;
		clearInterval(ismetles);
		ismetles = setInterval(banyaszat, banyaSpeed)
		currentScore -= 1000;
		scoreElem.innerText = currentScore;
		document.getElementById("banyaSpeed").innerText = banyaSpeed;
	}

	for (var i = 0; i < 5; i++) {
		let posx = randomInt(0, 800);
		let posy = randomInt(0, 800);
		let szin = randomGreyHex();
		let irany = toRadian(randomInt(0, 360));
		let sebesseg = randomInt(minSpeed, maxSpeed);
		let meret = randomInt(minSize, maxSize);
		aszteroidak.push(new aszteroida(posx, posy, szin, irany, sebesseg, meret));
	}
}

function reset() {
	ero = 1;
	sugar = 1;
	banyaEro = 1;
	banyaSpeed = 1000;
	banyak = [];
	document.getElementById("ero").innerText = ero;
	document.getElementById("sugar").innerText = sugar;
	document.getElementById("score").innerText = 0;
	document.getElementById("banya").innerText = banyak.length;
	document.getElementById("banyaEro").innerText = banyaEro;
	document.getElementById("banyaSpeed").innerText = banyaSpeed;
}

function rajtaVan(e) {
	if (e == 1) {
		rajta = true;
	}
	else {
		rajta = false;
	}
}

function test() {
	let scoreElem = document.getElementById("score");
	let currentScore = parseInt(scoreElem.innerText);
	currentScore = 999999;
	scoreElem.innerText = currentScore;
}


