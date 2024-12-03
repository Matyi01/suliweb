function init() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();

    // listen for all mousedown events on the canvas
    c.onmousemove = function (e) { handleMouseDown(e); };


    // handle the mousedown event
    function handleMouseDown(e) {
        mouseX = parseInt(e.offsetX);
        mouseY = parseInt(e.offsetY);




        // Put your mousedown stuff here
        draw(mouseX, mouseY);
    }


}

function draw(x, y) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.rect(x, y, 30, 20);
    ctx.fill();
    ctx.stroke();
}

