let kancso9 = 9;
let kancso4 = 0;
function nyereseg() {
    if (kancso9 === 6) {
        alert("Gratulálok, megoldottad a feladatot!");
    }
}

function frissitKancsok() {
    for (let i = 1; i <= 9; i++) {
        const elem = document.getElementById(i + '/9');
        if (i <= kancso9) {
            elem.style.backgroundColor = "blue";
        } else {
            elem.style.backgroundColor = "";
        }
    }

    for (let i = 1; i <= 4; i++) {
        const elem = document.getElementById(i + '/4');
        if (i <= kancso4) {
            elem.style.backgroundColor = "blue";
        } else {
            elem.style.backgroundColor = "";
        }
    }
    nyereseg();
}

function kancso9Megtolt() {
    kancso9 = 9;
    frissitKancsok();
}

function kancso9Atont() {
    const ferBe = 4 - kancso4;

    const atontendo = Math.min(kancso9, ferBe);

    if (atontendo > 0) {
        kancso9 -= atontendo;
        kancso4 += atontendo;
        frissitKancsok();
    }
}

function kancso9Kiont() {
    kancso9 = 0;
    frissitKancsok();
}

function kancso4Megtolt() {
    kancso4 = 4;
    frissitKancsok();
}

function kancso4Atont() {
    const ferBe = 9 - kancso9;

    const atontendo = Math.min(kancso4, ferBe);

    if (atontendo > 0) {
        kancso4 -= atontendo;
        kancso9 += atontendo;
        frissitKancsok();
    }
}

function kancso4Kiont() {
    kancso4 = 0;
    frissitKancsok();
}

window.onload = frissitKancsok;