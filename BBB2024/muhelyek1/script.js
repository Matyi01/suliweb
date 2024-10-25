class PlayerType {
    constructor(posx, posy) {
        this.posx = posx;
        this.posy = posy;
        this.size = 10;
        this.color = "#888888";
        this.speed = 3;
        this.up = false;
        this.down = false;
        this.right = false;
        this.left = false;
    }
}

class Varos {
    constructor(posx, posy, color) {
        this.posx = posx;
        this.posy = posy;
        this.size = 15;
        this.color = color;
    }
}

function toRadian(angle) {
    return angle * Math.PI / 180;
}

var player = new PlayerType(250, 250);
let players = [];

let varosok = [new Varos(450, 100, "#cc0000"), new Varos(50, 400, "#00cc00"), new Varos(350, 450, "#0000cc"),
new Varos(100, 200, "#cc0000"), new Varos(200, 50, "#00cc00"), new Varos(300, 150, "#0000cc")
];

function updatePosition() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var canvasHeight = c.offsetHeight;
    var canvasWidth = c.offsetWidth;
    if (player.up && player.right) {
        if (player.posx < canvasWidth) {
            player.posx += player.speed * 1.41;
        }
        if (player.posy > 0) {
            player.posy -= player.speed * 1.41;
        }
    } else if (player.up && player.left) {
        if (player.posx > 0) {
            player.posx -= player.speed * 2.00;
        }
        if (player.posy > 0) {
            player.posy -= player.speed * 1.41;
        }
    } else if (player.down && player.right) {
        if (player.posx < canvasWidth) {
            player.posx += player.speed * 1.41;
        }
        if (player.posy < canvasHeight) {
            player.posy += player.speed * 2.00;
        }
    } else if (player.down && player.left) {
        if (player.posx > 0) {
            player.posx -= player.speed * 2.00;
        }
        if (player.posy < canvasHeight) {
            player.posy += player.speed * 2.00;
        }
    } else if (player.up) {
        if (player.posy > 0) {
            player.posy -= player.speed * 1.41;
        }
    } else if (player.down) {
        if (player.posy < canvasHeight) {
            player.posy += player.speed * 2.00;
        }
    } else if (player.left) {
        if (player.posx > 0) {
            player.posx -= player.speed * 2.00;
        }
    } else if (player.right) {
        if (player.posx < canvasWidth) {
            player.posx += player.speed * 1.41;
        }
    }
}

function refreshCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var canvasHeight = c.offsetHeight;
    var canvasWidth = c.offsetWidth;
    ctx.clearRect(0, 0, canvasHeight, canvasWidth);
    updatePosition();

    ctx.beginPath();
    ctx.arc(player.posx, player.posy, player.size, 0, 2 * Math.PI);
    ctx.fillStyle = player.color;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(player.posx, player.posy, 200, 0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.stroke();

    for (let i = 0; i < varosok.length; i++) {
        ctx.beginPath();
        ctx.arc(varosok[i].posx, varosok[i].posy, varosok[i].size, 0, 2 * Math.PI);
        ctx.fillStyle = varosok[i].color;
        ctx.fill();
    }

    for (let i = 0; i < players.length; i++) {
        ctx.beginPath();
        ctx.arc(players[i].posx, players[i].posy, players[i].size, 0, 2 * Math.PI);
        ctx.fillStyle = players[i].color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(players[i].posx, players[i].posy, 200, 0, 2 * Math.PI);
        ctx.fillStyle = "#000000";
        ctx.stroke();
    }
}

function keyDownListener(event) {
    if (event.keyCode == 65) // a
    {
        player.left = true;
        player.right = false;
    }
    else if (event.keyCode == 68) // d
    {
        player.right = true;
        player.left = false;
    }
    else if (event.keyCode == 87) // w
    {
        player.up = true;
        player.down = false;
    }
    else if (event.keyCode == 83)// s
    {
        player.down = true;
        player.up = false;

    }
}

function keyUpListener(event) {
    if (event.keyCode == 65) // a
        player.left = false;
    else if (event.keyCode == 68) // d
        player.right = false;
    else if (event.keyCode == 87) // w
        player.up = false;
    else if (event.keyCode == 83) // s
        player.down = false;
}

function keyPressListener(event) {
    if (event.keyCode == 13) {
        players.push(player);
        player = new PlayerType(250, 250);
    }
}

var myVar = setInterval(refreshCanvas, 30);
window.addEventListener("keydown", keyDownListener);
window.addEventListener("keyup", keyUpListener);
window.addEventListener("keypress", keyPressListener);