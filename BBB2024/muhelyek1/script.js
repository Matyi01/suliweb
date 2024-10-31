class muhelyClass {
    constructor(posx, posy, color) {
        this.posx = posx;
        this.posy = posy;
        this.size = 25;
        this.outersize = 225;
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
        this.size = 35;
        this.color = color;
        this.defaultColor = color;
        this.aktivColor = aktivColor;
        this.aktiv = false;
    }
}

function toRadian(angle) {
    return angle * Math.PI / 180;
}

let szin1 = "#ccaa00";
let szin2 = "#00ccaa";
let szin3 = "#aa00cc";
let szin1Aktiv = "#ffdd00";
let szin2Aktiv = "#00ffdd";
let szin3Aktiv = "#dd00ff";

var muhely = new muhelyClass(500, 250, szin1Aktiv);
let muhelyek = [];

let varosok = [new Varos(450, 100, szin1, szin1Aktiv),
    new Varos(100, 400, szin2, szin2Aktiv),
    new Varos(350, 450, szin3, szin3Aktiv),
    new Varos(800, 170, szin1, szin1Aktiv),
    new Varos(900, 350, szin2, szin2Aktiv),
    new Varos(600, 70, szin3, szin3Aktiv),
    new Varos(100, 200, szin1, szin1Aktiv),
    new Varos(700, 300, szin1, szin1Aktiv),
    new Varos(200, 50, szin2, szin2Aktiv),
    new Varos(600, 400, szin2, szin2Aktiv),
    new Varos(550, 200, szin3, szin3Aktiv),
    new Varos(300, 150, szin3, szin3Aktiv)];

function init() {
    document.getElementsByTagName("b")[0].id = szin1Aktiv;
    document.getElementsByTagName("b")[1].id = szin2Aktiv;
    document.getElementsByTagName("b")[2].id = szin3Aktiv;
    document.getElementsByTagName("b")[0].style.backgroundColor = szin1Aktiv;
    document.getElementsByTagName("b")[1].style.backgroundColor = szin2Aktiv;
    document.getElementsByTagName("b")[2].style.backgroundColor = szin3Aktiv;
}

function map1() {
    document.getElementById("map1button").blur();
    varosok = [new Varos(450, 100, szin1, szin1Aktiv),
        new Varos(100, 400, szin2, szin2Aktiv),
        new Varos(350, 450, szin3, szin3Aktiv),
        new Varos(800, 170, szin1, szin1Aktiv),
        new Varos(900, 350, szin2, szin2Aktiv),
        new Varos(600, 70, szin3, szin3Aktiv),
        new Varos(100, 200, szin1, szin1Aktiv),
        new Varos(700, 300, szin1, szin1Aktiv),
        new Varos(200, 50, szin2, szin2Aktiv),
        new Varos(600, 400, szin2, szin2Aktiv),
        new Varos(550, 200, szin3, szin3Aktiv),
        new Varos(300, 150, szin3, szin3Aktiv)];
    muhely = new muhelyClass(500, 250, szin1Aktiv);
    muhelyek = [];
    document.getElementById(szin1Aktiv).innerHTML = 2;
    document.getElementById(szin2Aktiv).innerHTML = 2;
    document.getElementById(szin3Aktiv).innerHTML = 2;
    document.getElementById("message").innerHTML = "";
}

function map2() {
    document.getElementById("map2button").blur();
    varosok = [new Varos(50, 150, szin1, szin1Aktiv),
    new Varos(150, 400, szin2, szin2Aktiv),
    new Varos(350, 250, szin3, szin3Aktiv),
    new Varos(550, 250, szin1, szin1Aktiv),
    new Varos(650, 400, szin2, szin2Aktiv),
    new Varos(450, 50, szin3, szin3Aktiv),
    new Varos(900, 80, szin1, szin1Aktiv),
    new Varos(800, 270, szin2, szin2Aktiv),
    new Varos(700, 380, szin3, szin3Aktiv),
    new Varos(450, 400, szin1, szin1Aktiv),
    new Varos(200, 50, szin2, szin2Aktiv),
    new Varos(470, 150, szin3, szin3Aktiv)];
    muhely = new muhelyClass(500, 250, szin1Aktiv);
    muhelyek = [];
    document.getElementById(szin1Aktiv).innerHTML = 3;
    document.getElementById(szin2Aktiv).innerHTML = 2;
    document.getElementById(szin3Aktiv).innerHTML = 2;
    document.getElementById("message").innerHTML = "";
}

function map3() {
    document.getElementById("map3button").blur();
    varosok = [new Varos(300, 100, szin1, szin1Aktiv),
    new Varos(200, 400, szin2, szin2Aktiv),
    new Varos(50, 450, szin3, szin3Aktiv),
    new Varos(800, 150, szin1, szin1Aktiv),
    new Varos(600, 300, szin2, szin2Aktiv),
    new Varos(450, 200, szin3, szin3Aktiv),
    new Varos(900, 400, szin1, szin1Aktiv),
    new Varos(500, 350, szin2, szin2Aktiv),
    new Varos(700, 50, szin3, szin3Aktiv),
    new Varos(100, 350, szin1, szin1Aktiv),
    new Varos(75, 50, szin2, szin2Aktiv),
    new Varos(200, 150, szin3, szin3Aktiv)];
    muhely = new muhelyClass(500, 250, szin1Aktiv);
    muhelyek = [];
    document.getElementById(szin1Aktiv).innerHTML = 2;
    document.getElementById(szin2Aktiv).innerHTML = 2;
    document.getElementById(szin3Aktiv).innerHTML = 2;
    document.getElementById("message").innerHTML = "";
}

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
        if (tavolsag < muhely.outersize - varosok[i].size && muhely.color === varosok[i].aktivColor || varosok[i].aktiv === true)
            varosok[i].color = varosok[i].aktivColor;
        else
            varosok[i].color = varosok[i].defaultColor;
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

        let image = new Image();
        image.src = 'muhely.png';
        ctx.drawImage(image, muhelyek[i].posx - 20, muhelyek[i].posy - 25, 40, 40);
        ctx.globalAlpha = 1
    }

    for (let i = 0; i < varosok.length; i++) {
        ctx.beginPath();
        ctx.arc(varosok[i].posx, varosok[i].posy, varosok[i].size, 0, 2 * Math.PI);
        ctx.fillStyle = varosok[i].color;
        ctx.fill();

        let image = new Image();
        image.src = 'varos.png';
        ctx.drawImage(image, varosok[i].posx - 30, varosok[i].posy - 35, 60, 60);
    }

    ctx.beginPath();
    ctx.arc(muhely.posx, muhely.posy, muhely.size, 0, 2 * Math.PI);
    ctx.fillStyle = muhely.color;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(muhely.posx, muhely.posy, muhely.outersize, 0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.stroke();

    let image = new Image();
    image.src = 'muhely.png';
    ctx.drawImage(image, muhely.posx - 20, muhely.posy - 25, 40, 40);
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
            if (tavolsag < 200 && muhely.color === varosok[i].aktivColor)
                varosok[i].aktiv = true;
        }

        document.getElementById(muhely.color).innerHTML--;
        muhelyek.push(muhely);
        if (varosok.every((currentValue) => currentValue.aktiv === true)) {
            muhely = "";
            document.getElementById("message").innerHTML = "Ez a megoldás helyes";
        }
        else
            muhely = new muhelyClass(500, 250, szin1Aktiv);
    }
    if (document.getElementById(szin1Aktiv).innerHTML == 0 && document.getElementById(szin2Aktiv).innerHTML == 0 && document.getElementById(szin3Aktiv).innerHTML == 0 && !(varosok.every((currentValue) => currentValue.aktiv === true))) {
        muhely = "";
        document.getElementById("message").innerHTML = "Ez a megoldás nem helyes";
    }
    if (event.keyCode == 32) {
        if (muhely.color === szin1Aktiv)
            muhely.color = szin2Aktiv;
        else if (muhely.color === szin2Aktiv)
            muhely.color = szin3Aktiv;
        else if (muhely.color === szin3Aktiv)
            muhely.color = szin1Aktiv;
    }
}

var myVar = setInterval(refreshCanvas, 30);
window.addEventListener("keydown", keyDownListener);
window.addEventListener("keyup", keyUpListener);
window.addEventListener("keypress", keyPressListener);