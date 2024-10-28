class muhelyClass {
    constructor(posx, posy, color) {
        this.posx = posx;
        this.posy = posy;
        this.size = 10;
        this.outersize = 200;
        this.color = color;

        this.speed = 3;
        this.up = false;
        this.down = false;
        this.right = false;
        this.left = false;
    }
}

class Varos {
    constructor(posx, posy, color, aktivColor) {
        this.posx = posx;
        this.posy = posy;
        this.size = 15;
        this.color = color;
        this.defaultColor = color;
        this.aktivColor = aktivColor;
        this.aktiv = false;
    }
}

function toRadian(angle) {
    return angle * Math.PI / 180;
}

var muhely = new muhelyClass(250, 250, "#cc0000");
let muhelyek = [];

let varosok = [new Varos(450, 100, "#cc0000", "#ff0000"), new Varos(50, 400, "#00cc00", "#00ff00"), new Varos(350, 450, "#0000cc", "#0000ff"), new Varos(100, 200, "#cc0000", "#ff0000"),
new Varos(200, 50, "#00cc00", "#00ff00"), new Varos(300, 150, "#0000cc", "#0000ff")];

function updatePosition() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var canvasHeight = c.offsetHeight;
    var canvasWidth = c.offsetWidth;
    if (muhely.up && muhely.right) {
        if (muhely.posx < canvasWidth)
            muhely.posx += muhely.speed * 1.41;
        if (muhely.posy > 0)
            muhely.posy -= muhely.speed * 1.41;
    } else if (muhely.up && muhely.left) {
        if (muhely.posx > 0)
            muhely.posx -= muhely.speed * 2.00;
        if (muhely.posy > 0)
            muhely.posy -= muhely.speed * 1.41;
    } else if (muhely.down && muhely.right) {
        if (muhely.posx < canvasWidth)
            muhely.posx += muhely.speed * 1.41;
        if (muhely.posy < canvasHeight)
            muhely.posy += muhely.speed * 2.00;
    } else if (muhely.down && muhely.left) {
        if (muhely.posx > 0)
            muhely.posx -= muhely.speed * 2.00;
        if (muhely.posy < canvasHeight)
            muhely.posy += muhely.speed * 2.00;
    } else if (muhely.up) {
        if (muhely.posy > 0)
            muhely.posy -= muhely.speed * 1.41;
    } else if (muhely.down) {
        if (muhely.posy < canvasHeight)
            muhely.posy += muhely.speed * 2.00;
    } else if (muhely.left) {
        if (muhely.posx > 0)
            muhely.posx -= muhely.speed * 2.00;
    } else if (muhely.right) {
        if (muhely.posx < canvasWidth)
            muhely.posx += muhely.speed * 1.41;
    }
}

function refreshCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var canvasHeight = c.offsetHeight;
    var canvasWidth = c.offsetWidth;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    updatePosition();

    for (let i = 0; i < varosok.length; i++) {
        let tavolsag = Math.sqrt((muhely.posx - varosok[i].posx) ** 2 + (muhely.posy - varosok[i].posy) ** 2);
        if (tavolsag < 200 && muhely.color === varosok[i].defaultColor || varosok[i].aktiv === true)
            varosok[i].color = varosok[i].aktivColor;
        else
            varosok[i].color = varosok[i].defaultColor;
    }

    ctx.beginPath();
    ctx.arc(muhely.posx, muhely.posy, muhely.size, 0, 2 * Math.PI);
    ctx.fillStyle = muhely.color;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(muhely.posx, muhely.posy, muhely.outersize, 0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.stroke();

    for (let i = 0; i < varosok.length; i++) {
        ctx.beginPath();
        ctx.arc(varosok[i].posx, varosok[i].posy, varosok[i].size, 0, 2 * Math.PI);
        ctx.fillStyle = varosok[i].color;
        ctx.fill();
    }

    for (let i = 0; i < muhelyek.length; i++) {
        ctx.globalAlpha = 0.5
        ctx.beginPath();
        ctx.arc(muhelyek[i].posx, muhelyek[i].posy, muhelyek[i].size, 0, 2 * Math.PI);
        ctx.fillStyle = muhelyek[i].color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(muhelyek[i].posx, muhelyek[i].posy, muhelyek[i].outersize, 0, 2 * Math.PI);
        ctx.fillStyle = "#000000";
        ctx.stroke();
        ctx.globalAlpha = 1
    }
}

function keyDownListener(event) {
    if (event.keyCode == 65) // a
    {
        muhely.left = true;
        muhely.right = false;
    }
    else if (event.keyCode == 68) // d
    {
        muhely.right = true;
        muhely.left = false;
    }
    else if (event.keyCode == 87) // w
    {
        muhely.up = true;
        muhely.down = false;
    }
    else if (event.keyCode == 83)// s
    {
        muhely.down = true;
        muhely.up = false;
    }
}

function keyUpListener(event) {
    if (event.keyCode == 65) // a
        muhely.left = false;
    else if (event.keyCode == 68) // d
        muhely.right = false;
    else if (event.keyCode == 87) // w
        muhely.up = false;
    else if (event.keyCode == 83) // s
        muhely.down = false;
}

function keyPressListener(event) {
    if (event.keyCode == 13 && document.getElementById(muhely.color).innerHTML > 0) {
        for (let i = 0; i < varosok.length; i++) {
            let tavolsag = Math.sqrt((muhely.posx - varosok[i].posx) ** 2 + (muhely.posy - varosok[i].posy) ** 2);
            if (tavolsag < 200 && muhely.color === varosok[i].defaultColor)
                varosok[i].aktiv = true;
        }

        document.getElementById(muhely.color).innerHTML--;
        muhelyek.push(muhely);
        if (varosok.every((currentValue) => currentValue.aktiv === true)) {
            muhely = "";
            document.getElementById("message").innerHTML = "Nem basztad el";
        }
        else
            muhely = new muhelyClass(250, 250, muhely.color);
    }
    if (document.getElementById("#cc0000").innerHTML == 0 && document.getElementById("#00cc00").innerHTML == 0 && document.getElementById("#0000cc").innerHTML == 0 && !(varosok.every((currentValue) => currentValue.aktiv === true))) {
        muhely = "";
        document.getElementById("message").innerHTML = "Elbasztad";
    }
    if (event.keyCode == 32) {
        if (muhely.color === "#cc0000")
            muhely.color = "#00cc00";
        else if (muhely.color === "#00cc00")
            muhely.color = "#0000cc";
        else if (muhely.color === "#0000cc")
            muhely.color = "#cc0000";
    }
}

var myVar = setInterval(refreshCanvas, 30);
window.addEventListener("keydown", keyDownListener);
window.addEventListener("keyup", keyUpListener);
window.addEventListener("keypress", keyPressListener);