var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var canvasHeight = c.offsetHeight;
var canvasWidth = c.offsetWidth;

let ero = 250;
let hossz = Math.PI + 2;

function refresh() {
    ero = parseInt(document.getElementById("ero").value);


}

function draw() {
    if (hossz > 0) {
        hossz -= (Math.PI + 2) / 50;
    }
    else if (hossz < 0.1) {
        hossz = Math.PI + 2;
    }
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.arc((50 + ero), canvasHeight, ero, Math.PI, -hossz);
    ctx.stroke();
}

var myVar = setInterval(draw, 30);
