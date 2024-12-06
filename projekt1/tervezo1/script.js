class szekClass {
    constructor(posx, posy) {
        this.posx = posx;
        this.posy = posy;
        this.width = 20;
        this.height = 20;
    }
}

function init() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    /*
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
    */

    var szekek = [new szekClass(0, 0),
    new szekClass(220, 200),
    new szekClass(260, 200),
    new szekClass(300, 200),
    new szekClass(340, 200),
    ];
    var aktivSzek = 0;
    szekek.forEach(function (szek) { draw(szek.posx, szek.posy); });

    // listen for all mousedown events on the canvas
    c.onmousemove = function (e) { handleMouseMove(e); };
    c.onclick = function (e) { handleMouseClick(e); };

    // handle the mousedown event
    function handleMouseMove(e) {
        /*
        mouseX = parseInt(e.offsetX);
        mouseY = parseInt(e.offsetY);

        // Put your mousedown stuff here
        draw(mouseX, mouseY);
        */

        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);


        szekek[aktivSzek].posx = parseInt(e.offsetX);
        szekek[aktivSzek].posy = parseInt(e.offsetY);
        szekek[0].posx = 0;
        szekek[0].posy = 0;
        szekek.forEach(function (szek) { draw(szek.posx, szek.posy); });
    }

    function handleMouseClick(e) {
        //if (aktivSzek != 0){
        for (let i = 0; i < szekek.length; i++) {
            if (szekek[i].posx > parseInt(e.offsetX) - szekek[i].width && szekek[i].posx < parseInt(e.offsetX)
                && szekek[i].posy > parseInt(e.offsetY) - szekek[i].height && szekek[i].posy < parseInt(e.offsetY)) {
                console.log("asd");
                aktivSzek = i;
                return;
            }
        }
        //}

        aktivSzek = 0;
    }

}

function draw(x, y) {
    if (x != 0 && y != 0) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.rect(x, y, 20, 20);
        ctx.fill();
        ctx.stroke();
    }
}

