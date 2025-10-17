class Ball {
	constructor(posx, posy, color, direction, speed) {
		this.posx = posx;
		this.posy = posy;
		this.color = color;
		this.direction = direction;
		this.speed = speed;
		this.size = 20;
	}
}

function toRadian(angle) {
	return angle * Math.PI / 180;
}

var ballObjects = [new Ball(50, 40, "#ffcccc", toRadian(30), 3.5),
new Ball(150, 80, "#aa00cc", toRadian(83), 4.3),
new Ball(250, 340, "#005577", toRadian(-130), 1.9),
new Ball(450, 140, "#aaffbb", toRadian(12), 3)];

var speedmod = 0;

function moveBall(ballObj, canvasWidth, canvasHeight) {
	// Ball boundaries
	var xMinimum = ballObj.size;
	var xMaximum = canvasWidth - ballObj.size;
	var yMinimum = ballObj.size;
	var yMaximum = canvasHeight - ballObj.size;
	// Move the ball
	var xChange = ballObj.speed * Math.cos(ballObj.direction);
	var yChange = ballObj.speed * Math.sin(ballObj.direction);
	ballObj.posx += xChange;
	ballObj.posy += yChange;
	// Bounce back from the sides
	if (ballObj.posx < xMinimum) {
		ballObj.posx = xMinimum + (xMinimum - ballObj.posx);
		if (ballObj.direction > 0) ballObj.direction = Math.PI - ballObj.direction;
		else ballObj.direction = -Math.PI - ballObj.direction;
	}
	else if (ballObj.posx > xMaximum) {
		ballObj.posx = xMaximum - (ballObj.posx - xMaximum);
		if (ballObj.direction > 0) ballObj.direction = Math.PI - ballObj.direction;
		else ballObj.direction = -Math.PI - ballObj.direction;
	}
	if (ballObj.posy < yMinimum) {
		ballObj.posy = yMinimum + (yMinimum - ballObj.posy);
		ballObj.direction = -ballObj.direction;
	}
	else if (ballObj.posy > yMaximum) {
		ballObj.posy = yMaximum - (ballObj.posy - yMaximum);
		ballObj.direction = -ballObj.direction;
	}
}

function updateObjects() {
	var c = document.getElementById("game-canvas");
	var ctx = c.getContext("2d");
	var canvasHeight = c.offsetHeight;
	var canvasWidth = c.offsetWidth;
	for (var index = 0; index < ballObjects.length; index++) {
		moveBall(ballObjects[index], canvasWidth, canvasHeight);
	}
}

function refreshCanvas() {
	var c = document.getElementById("game-canvas");
	var ctx = c.getContext("2d");
	var canvasHeight = c.offsetHeight;
	var canvasWidth = c.offsetWidth;
	ctx.clearRect(0, 0, canvasHeight, canvasWidth);

	updateObjects();

	for (var index = 0; index < ballObjects.length; index++) {
		ctx.beginPath();
		ctx.arc(ballObjects[index].posx, ballObjects[index].posy, ballObjects[index].size, 0, 2 * Math.PI);
		ctx.fillStyle = ballObjects[index].color;
		ctx.fill();
	}
}

var myVar = setInterval(refreshCanvas, 30);

function init() {

}


function aszteroidaMozgas() {

}