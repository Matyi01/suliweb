let palya = [];
let robot = { x: 0, y: 0, irany: 'jobb' };
let kivalasztott = 'jobb';
let fut = false;
let idozito = null;

function letrehozPalya() {
    const palyaElem = document.getElementById('palya');
    palyaElem.innerHTML = '';
    palya = [];

    for (let y = 0; y < 10; y++) {
        const sor = [];
        for (let x = 0; x < 10; x++) {
            sor.push(null);

            const mezo = document.createElement('div');
            mezo.className = 'mezo';
            mezo.onclick = function () {
                if (kivalasztott === 'torol') {
                    palya[y][x] = null;
                } else {
                    palya[y][x] = kivalasztott;
                }
                frissit();
            };

            palyaElem.appendChild(mezo);
        }
        palya.push(sor);
    }

    frissit();
}

function frissit() {
    const mezok = document.getElementsByClassName('mezo');

    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const mezo = mezok[y * 10 + x];
            mezo.className = 'mezo';
            mezo.textContent = '';

            if (palya[y][x] === 'jobb') {
                mezo.classList.add('jobb');
                mezo.textContent = '→';
            }
            if (palya[y][x] === 'bal') {
                mezo.classList.add('bal');
                mezo.textContent = '←';
            }
            if (palya[y][x] === 'viszza') {
                mezo.classList.add('viszza');
                mezo.textContent = '↔';
            }

            if (x === robot.x && y === robot.y) {
                mezo.classList.add('robot');
                if (robot.irany === 'jobb') mezo.textContent = '→';
                if (robot.irany === 'bal') mezo.textContent = '←';
                if (robot.irany === 'fel') mezo.textContent = '↑';
                if (robot.irany === 'le') mezo.textContent = '↓';
            }
        }
    }
}

function valaszt(tipus) {
    kivalasztott = tipus;
}

function lep() {
    let ujX = robot.x;
    let ujY = robot.y;

    if (robot.irany === 'jobb') ujX++;
    if (robot.irany === 'bal') ujX--;
    if (robot.irany === 'fel') ujY--;
    if (robot.irany === 'le') ujY++;

    if (ujX >= 0 && ujX < 10 && ujY >= 0 && ujY < 10) {
        robot.x = ujX;
        robot.y = ujY;
    }

    const fordulas = palya[robot.y][robot.x];
    if (fordulas === 'jobb') {
        if (robot.irany === 'jobb') robot.irany = 'le';
        else if (robot.irany === 'le') robot.irany = 'bal';
        else if (robot.irany === 'bal') robot.irany = 'fel';
        else if (robot.irany === 'fel') robot.irany = 'jobb';
    }
    else if (fordulas === 'bal') {
        if (robot.irany === 'jobb') robot.irany = 'fel';
        else if (robot.irany === 'fel') robot.irany = 'bal';
        else if (robot.irany === 'bal') robot.irany = 'le';
        else if (robot.irany === 'le') robot.irany = 'jobb';
    }
    else if (fordulas === 'viszza') {
        if (robot.irany === 'jobb') robot.irany = 'bal';
        else if (robot.irany === 'bal') robot.irany = 'jobb';
        else if (robot.irany === 'fel') robot.irany = 'le';
        else if (robot.irany === 'le') robot.irany = 'fel';
    }

    frissit();
}

function start() {
    if (!fut) {
        fut = true;
        idozito = setInterval(lep, 1000);
    }
}

window.onload = letrehozPalya;