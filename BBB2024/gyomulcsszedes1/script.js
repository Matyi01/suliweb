var nrow;
var ncell;
let meret;
var tt = new Array(nrow);
var newrow;
let lepes;
let eredetilepes;
let row;
let column;
let szolok = ["szolo1", "szolo2", "szolo3", "szolo4", "szolo5", "szolo6"];
let ertekek = [16, 8, 9, 13, 10, 10];


function init() {
    document.getElementById("hatralevo").innerHTML += lepes;
    for (var i = 0; i < nrow; i++) {
        newrow = document.getElementById("palya").insertRow(i);
        tt[i] = new Array(ncell);
        for (var j = 0; j < ncell; j++) {
            tt[i][j] = newrow.insertCell(j);
            tt[i][j].id = i * ncell + j;
            tt[i][j].onclick = function () {
                cellClicked(this);
            };
            tt[i][j].style.width = "50px";
            tt[i][j].style.height = "50px";
            tt[i][j].style.color = "#fcfcfc";
            tt[i][j].dataset.aktiv = 0;
            let random = Math.floor(Math.random() * szolok.length);
            tt[i][j].innerHTML = '<img src="' + szolok[random] + '.png">';
            tt[i][j].dataset.ertek = random;
            tt[i][j].dataset.aktivertek = ertekek[random];
        }
    }
}

function clearBackground() {
    for (var i = 0; i < nrow; i++) {
        for (var j = 0; j < ncell; j++) {
            tt[i][j].dataset.aktiv = 0;
            tt[i][j].lastChild.style.filter = "brightness(100%)";
        }
    }
}

function cellClicked(obj) {
    if (eredetilepes === lepes) {
        aktivmezo(obj);
    }
    else if (obj.dataset.aktiv == 1 && lepes >= 0) {
        aktivmezo(obj);
        if (lepes === -1) {
            if (document.getElementById("highscore").innerHTML < document.getElementById("score").innerHTML) {
                document.getElementById("highscore").innerHTML = document.getElementById("score").innerHTML;
            }
            document.getElementById("vege").style.display = "block";
        }
    }
}

function cellClickable() {
    if (row !== nrow - 1) {
        tt[row + 1][column].dataset.aktiv = 1;
        tt[row + 1][column].lastChild.style.filter = "brightness(75%)";
    }
    if (column !== 0) {
        tt[row][column - 1].dataset.aktiv = 1;
        tt[row][column - 1].lastChild.style.filter = "brightness(75%)";
    }
    if (column !== ncell - 1) {
        tt[row][column + 1].dataset.aktiv = 1;
        tt[row][column + 1].lastChild.style.filter = "brightness(75%)";
    }
    if (row !== 0) {
        tt[row - 1][column].dataset.aktiv = 1;
        tt[row - 1][column].lastChild.style.filter = "brightness(75%)";
    }
}

function aktivmezo(obj) {
    if (lepes !== eredetilepes) {
        tt[row][column].innerHTML = '<img src="dead.png">';
    }

    clearBackground();

    row = parseInt(obj.id / ncell);
    column = obj.id % ncell;
    tt[row][column].dataset.aktiv = 2;

    cellClickable();

    document.getElementById("hatralevo").innerHTML = lepes--;
    document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + Number(tt[row][column].dataset.aktivertek);

    tt[row][column].innerHTML = '<img src="kosar.jpeg">';
    tt[row][column].dataset.aktivertek = 0;
}

function ujra() {
    if (document.getElementById("highscore").innerHTML < document.getElementById("score").innerHTML) {
        document.getElementById("highscore").innerHTML = document.getElementById("score").innerHTML;
    }

    document.getElementById("vege").style.display = "none";

    lepes = eredetilepes;
    document.getElementById("hatralevo").innerHTML = lepes;
    document.getElementById("score").innerHTML = 0;

    for (var i = 0; i < nrow; i++) {
        for (var j = 0; j < ncell; j++) {
            tt[i][j].dataset.aktiv = 0;
            tt[i][j].dataset.aktivertek = ertekek[tt[i][j].dataset.ertek];
            tt[i][j].lastChild.style.filter = "brightness(100%)";
            tt[i][j].innerHTML = '<img src="' + szolok[tt[i][j].dataset.ertek] + '.png">';
        }
    }

    document.getElementById("tp").style.display = "block";
    document.getElementById("plusz").style.display = "block";
    document.getElementById("cross").style.display = "block";
}

function teleport() {
    if (typeof row !== 'undefined'){
        for (var i = 0; i < nrow; i++) {
            for (var j = 0; j < ncell; j++) {
                tt[i][j].dataset.aktiv = 1;
                tt[i][j].lastChild.style.filter = "brightness(75%)";
            }
        }
    
        tt[row][column].dataset.aktiv = 2;
        tt[row][column].lastChild.style.filter = "brightness(100%)";
        document.getElementById("tp").style.display = "none";
    }
}

function pluszegy() {
    if (typeof row !== 'undefined'){
        if (row < nrow - 2) {
            tt[row + 2][column].dataset.aktiv = 1;
            tt[row + 2][column].lastChild.style.filter = "brightness(75%)";
        }
        if (column > 1) {
            tt[row][column - 2].dataset.aktiv = 1;
            tt[row][column - 2].lastChild.style.filter = "brightness(75%)";
        }
        if (column < ncell - 2) {
            tt[row][column + 2].dataset.aktiv = 1;
            tt[row][column + 2].lastChild.style.filter = "brightness(75%)";
        }
        if (row > 1) {
            tt[row - 2][column].dataset.aktiv = 1;
            tt[row - 2][column].lastChild.style.filter = "brightness(75%)";
        }
    
        document.getElementById("plusz").style.display = "none";
    }
}

function kereszt() {
    if (typeof row !== 'undefined'){
        for (var i = 0; i < nrow; i++) {
            for (var j = 0; j < ncell; j++) {
                if (i === row || j === column) {
                    tt[i][j].dataset.aktiv = 1;
                    tt[i][j].lastChild.style.filter = "brightness(75%)";
                }
            }
        }
    
        tt[row][column].dataset.aktiv = 2;
        tt[row][column].lastChild.style.filter = "brightness(100%)";
        document.getElementById("cross").style.display = "none";
    }
}

function meretmegadas() {
    meret = document.getElementById("meret").value;
    if (meret >= 2 && meret <= 20) {
        nrow = meret;
        ncell = meret;
        lepes = Math.floor(Math.random() * 10) + Number(meret);
        eredetilepes = lepes;
        init();
        document.getElementById("rules").style.display = "none";
        document.getElementById("main").style.display = "block";
    }
}