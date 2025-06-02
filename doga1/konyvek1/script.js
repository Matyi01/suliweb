class Konyv {
    constructor(ev, negyedEv, eredet, leiras, db) {
        this.ev = ev;
        this.negyedEv = negyedEv;
        this.eredet = eredet;
        this.leiras = leiras;
        this.db = db;
    }
}

const konyvek = [];

function init() {
    fetch("kiadas.txt")
        .then(x => x.text())
        .then(szoveg => {
            const sorok = szoveg.split("\n");
            sorok.forEach(e => {
                if (e != "") {
                    const vag = e.split(";");
                    kolcsonzesek.push(new Konyv(parseInt(vag[0]), parseInt(vag[1]), vag[2], vag[3], parseInt(vag[4])));
                }
            });
        });
}

function f2() {
    let be = document.getElementById("f2be");
    let db = 0;
    konyvek.forEach(e => {
        if (e.includes(be)) {
            db++;
        }
    });
    if (db == 0) {
        document.getElementById("f2").innerHTML = "Nem adtak ki"
    }
    else {
        document.getElementById("f2").innerHTML = db + " könyvkiadás"
    }
}

function f3() {
    let peldanySzam = {};
    konyvek.forEach(e => {
        if (Object.keys(peldanySzam).includes(e.db)) {
            peldanySzam[e.db]++;
        }
        else {
            peldanySzam[e.db] = 1;
        }
    });
    document.getElementById("f3.1").innerHTML = Math.max(Object.keys(peldanySzam));
    document.getElementById("f3.2").innerHTML = peldanySzam[Math.max(Object.keys(peldanySzam))];
}

function f4() {
    konyvek.every(e => {
        if (e.eredet == "kf" && e.db >= 40000) {
            document.getElementById("f4").innerHTML = e.ev + "/" + e.negyedEv + ". " + e.leiras;
            return false;
        }
        return true;
    });
}

function f5() {
    document.getElementById("f5").innerHTML = "";

    let stat = {};
    konyvek.forEach(e => {
        if (e.eredet == ma) {
            if (Object.keys(stat).includes(e.ev)) {
                stat[e.ev][0]++;
                stat[e.ev][1] += e.db;
            }
            else {
                stat[e.ev] = [1, e.db, 0, 0];
            }
        }
        else {
            if (Object.keys(stat).includes(e.ev)) {
                stat[e.ev][2]++;
                stat[e.ev][3] += e.db;
            }
            else {
                stat[e.ev] = [0, 0, 1, e.db];
            }
        }
    });
    let tabla = document.createElement("table");

    let fejlec = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.innerHTML = "Év";
    fejlec.appendChild(th1);

    let th2 = document.createElement("th");
    th2.innerHTML = "Magyar kiadás";
    fejlec.appendChild(th2);

    let th3 = document.createElement("th");
    th3.innerHTML = "Magyar példányszám";
    fejlec.appendChild(th3);

    let th4 = document.createElement("th");
    th2.innerHTML = "Külföldi kiadás";
    fejlec.appendChild(th4);

    let th5 = document.createElement("th");
    th3.innerHTML = "Külföldi példányszám";
    fejlec.appendChild(th5);

    tabla.appendChild(fejlec);

    Object.keys(stat).forEach(e => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = e;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.innerHTML = stat[e][0];
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.innerHTML = stat[e][1];
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td3.innerHTML = stat[e][2];
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td3.innerHTML = stat[e][3];
        tr.appendChild(td5);

        tabla.appendChild(tr);
    }
    );

    document.getElementById("f5").appendChild(tabla);

}

function f6() {
    document.getElementById("f6").innerHTML = "";

    let kiirando = [];

    konyvek.forEach(e => {
        let db = 0;
        konyvek.forEach(f => {
            if (e.ev == f.ev) {
                if (e.leiras == f.leiras && e.db > f.db && e.negyedEv < f.negyedEv) {
                    db++
                }
            }
            else if (e.ev < f.ev) {
                if (e.leiras == f.leiras && e.db > f.db) {
                    db++
                }
            }
        })
        if (db > 1 && !kiirando.includes(e.leiras)) {
            kiirando.push(e.leiras);
        }
    });

    kiirando.forEach(e => {
        document.getElementById("f6").innerHTML += e+"\n";
    })

}
