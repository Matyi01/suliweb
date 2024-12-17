class szekClass {
    constructor(posx, posy) {
        this.posx = posx;
        this.posy = posy;
        this.width = 20;
        this.height = 20;
    }
}

var szekek = [new szekClass(0, 0),
new szekClass(220, 200),
new szekClass(260, 200),
new szekClass(300, 200),
new szekClass(340, 200)
];

var aktivSzek = 0;

let selectSzamlalo = 0;

function init() {
    mozgat();
}

function mozgat() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    /*
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
    */

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
        if (aktivSzek == 0) {
            for (let i = 0; i < szekek.length; i++) {
                if (szekek[i].posx > parseInt(e.offsetX) - szekek[i].width && szekek[i].posx < parseInt(e.offsetX)
                    && szekek[i].posy > parseInt(e.offsetY) - szekek[i].height && szekek[i].posy < parseInt(e.offsetY)) {
                    aktivSzek = i;
                    return;
                }
            }
        }
        aktivSzek = 0;
    }
}

function draw(x, y) {
    document.getElementById("szekDb").innerHTML = szekek.length - 1;

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

function szek1() {
    let tempSzek = new szekClass(100, 100);
    szekek.push(tempSzek);
}

function areaSelect() {
    selectSzamlalo++;
    if (selectSzamlalo % 2 == 1) {
        document.getElementById("areaSelect").style.backgroundColor = "lightgrey";

        let kezdX = 0;
        let kezdY = 0;
        let mozog = false;

        let xDb = 0;
        let yDb = 0;

        function handleMouseClick(e) {
            if (!mozog) {
                kezdX = parseInt(e.offsetX);
                kezdY = parseInt(e.offsetY);
            }
            else {
                xDb = Math.floor((parseInt(e.offsetX) - kezdX) / 30);
                yDb = Math.floor((parseInt(e.offsetY) - kezdY) / 40);

                if (xDb > 0 && yDb > 0) {
                    for (let i = 0; i < xDb; i++) {
                        for (let j = 0; j < yDb; j++) {
                            let tempSzek = new szekClass(kezdX + i * 30, kezdY + j * 40)
                            szekek.push(tempSzek);
                        }
                    }
                }
                else if (xDb < 0 && yDb > 0) {
                    for (let i = 0; i > xDb; i--) {
                        for (let j = 0; j < yDb; j++) {
                            let tempSzek = new szekClass(kezdX + i * 30, kezdY + j * 40)
                            szekek.push(tempSzek);
                        }
                    }
                }
                else if (xDb > 0 && yDb < 0) {
                    for (let i = 0; i < xDb; i++) {
                        for (let j = 0; j > yDb; j--) {
                            let tempSzek = new szekClass(kezdX + i * 30, kezdY + j * 40)
                            szekek.push(tempSzek);
                        }
                    }
                } else if (xDb < 0 && yDb < 0) {
                    for (let i = 0; i > xDb; i--) {
                        for (let j = 0; j > yDb; j--) {
                            let tempSzek = new szekClass(kezdX + i * 30, kezdY + j * 40)
                            szekek.push(tempSzek);
                        }
                    }
                }
                ctx.clearRect(0, 0, c.width, c.height); //tötöl

                szekek.forEach(function (szek) { draw(szek.posx, szek.posy); }); //székeket berajzolja
            }
            mozog = !mozog;
        }

        function handleMouseMove(e) {
            if (mozog) {
                ctx.clearRect(0, 0, c.width, c.height); //tötöl

                szekek.forEach(function (szek) { draw(szek.posx, szek.posy); }); //székeket berajzolja



                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.strokeRect(kezdX, kezdY, parseInt(e.offsetX) - kezdX, parseInt(e.offsetY) - kezdY);
                ctx.stroke();
            }
        }


        aktivSzek = 0;
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        c.onmousemove = function (e) { handleMouseMove(e); };
        c.onclick = function (e) { handleMouseClick(e); };
    }
    else {
        document.getElementById("areaSelect").style.backgroundColor = "white";

        mozgat();
    }
}

let szek1TorolAktiv = false;
function szek1Torol() {
    var c = document.getElementById("myCanvas");
    if (!szek1TorolAktiv) {
        document.getElementById("szek1Torol").style.backgroundColor = "lightgrey";
        c.onclick = function (e) { handleMouseClick(e); };
    }
    else {
        document.getElementById("szek1Torol").style.backgroundColor = "white";
        mozgat();
    }
    szek1TorolAktiv = !szek1TorolAktiv;
    function handleMouseClick(e) {
        for (let i = 0; i < szekek.length; i++) {
            if (szekek[i].posx > parseInt(e.offsetX) - szekek[i].width && szekek[i].posx < parseInt(e.offsetX)
                && szekek[i].posy > parseInt(e.offsetY) - szekek[i].height && szekek[i].posy < parseInt(e.offsetY)) {
                szekek.splice(i, 1);
            }
        }
    }
}