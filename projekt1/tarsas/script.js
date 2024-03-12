let szinek = ["blue","red","green","yellow","brown","orange"];
let aktivjatekos = 0;
let bolthelyek = [0, 0, 0, 0, 0];
let bazarhely = 0;
let boltwidth = 250;
let boltheight = 300;
let jatekosszam = 6;

const sorkartyak = [
    {nev : "Szerencse", tortenes : "Egy ismerősödnek el kellet mennie a gyerekért az óvodába és átadta neked a sorban elfoglalt helyét.", cselekves : "Húzd a bábudaz a szomszéd sor második helyére."},
    {nev : "Barát a megyei pártbizottságban", tortenes : "Ismerősödtől értesültél egy tervezett áruszállításról.", cselekves : "Megleshetsz két áruszállítás-kártyát a pakli tetejéről."},
    {nev : "Leltár", tortenes : "A bolt leltár miatt zárva van. Tedd ki a 'Leltár' táblát. A bolt ebben a menetben nem árul semmit.", cselekves : "Nem használ a 'Fokozott áruszállítás', A 'Téves szállítás' és az 'Áru a pult alól' sem."},
    {nev : "Fokozott áruszállítás", tortenes : "Mindenki örömére a vártnál több árut szállítottak a boltba.", cselekves : "Tegyél eggyel több árut a boltba, amelybe az imént hoztak árut."},
    {nev : "Kisgyerekes anyuka", tortenes : "Kölcsön kapsz egy két év alatti gyereket. Soron kivül vásárolhatsz.", cselekves : "Vidd a bábudata sor elejére."},
    {nev : "Maga nem itt állt", tortenes : "Észrevetted, hogy valaki eléd furakodott a sorban.", cselekves : "Húzd egy hellyel előrébb a bábudat."},
    {nev : "Társadalmi lista", tortenes : "Létrejött egy társadalmi lista, amely feljogosít a sor egy bizonyos helyére.", cselekves : "Fogd két ujjad közé a kiválasztott sort és fordítsd meg az irányát úgy, hogy az utolsó bábu legyen az első."},
    {nev : "Áru a pult alól", tortenes : "Egy ismerős bolti eladó a bolt nyitása előtt ad el neked árut.", cselekves : "Ha első vagy a sorban, vidd haza azonnal az árut."},
    {nev : "Téves szállítás", tortenes : "A teherautó sofőrje összekeverte a boltokat.", cselekves : "Egy árut szomszéd boltban kell átvenni."},
    {nev : "A hatalom kritikája", tortenes : "A sorban valaki hangosan szidja a rendszert és a vezetést.", cselekves : "Miközben a rendőrség igazoltatja, mások elé tolakodtak. Lépj két hellyel hátrébb."}
]

const bevasarlolistak=[
    {nev:"Nyaralás a telken",id:3, Trafik:4,ABC:3,Kisgep:2,Butor:1,Ruha:0},
    {nev:"Elsőáldozás megszervezése",id:2, Trafik:0,ABC:4,Kisgep:3,Butor:2,Ruha:1},
    {nev:"Gyerekek táboroztatása",id:4, Trafik:3,ABC:2,Kisgep:1,Butor:0,Ruha:4},
    {nev:"Konyhafelszerelés",id:1, Trafik:1,ABC:0,Kisgep:4,Butor:3,Ruha:2},
    {nev:"A kiutalt lakás berendezése",id:5, Trafik:2,ABC:1,Kisgep:0,Butor:4,Ruha:3}
]

let ABC = ["1","2","3","4","5","6","7","8","9","10","11","12"];

let TRAFIK = ["1","2","3","4","5","6","7","8","9","10","11","12"];

let KISGEP = ["1","2","3","4","5","6","7","8","9","10","11","12"];

let BUTOR = ["1","2","3","4","5","6","7","8","9","10","11","12"];

let RUHA = ["1","2","3","4","5","6","7","8","9","10","11","12"];

let boltsorok = [["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""]];

let bazarsor = ["","","","","","","","","","","","","",""]

function init()
{
    let tabla = document.getElementById("tabla");

    //boltok lerakása
    for (let i = 0; i < 5; i++)
    {
        tabla.appendChild(boltletrehozas(i));
    }

    //bazár lerakása
    tabla.appendChild(bazarletrehozas());
    
    //szinek válsztása
    tabla.appendChild(szinekvalasztasa());

    //kezdőjátékos színének a jelölése
    document.getElementById(szinek[aktivjatekos]).style.border = "2px solid red";
}

function boltletrehozas(i)
{
    let bolt = document.createElement("div");

    if (i === 0)
        bolt.innerHTML += "ABC";
    else if (i === 1)
        bolt.innerHTML += "TRAFIK";
    else if (i === 2)
        bolt.innerHTML += "KISGÉP";
    else if (i === 3)
        bolt.innerHTML += "BÚTOR";
    else if (i === 4)
        bolt.innerHTML += "RUHA";

    bolt.style.left = 25 + i * 275 + "px";

    bolt.id = "bolt" + i;
    bolt.className = "bolt";

    bolt.onclick = function(){
        if (bolthelyek[i] !== 8)
        {
            document.getElementById("bolt" + i).children[0].children[bolthelyek[i]].style.backgroundColor = szinek[aktivjatekos];
            document.getElementById("bolt" + i).children[0].children[bolthelyek[i]].style.backgroundImage = "url(kepek/" + aktivjatekos + ".png)";

            boltsorok[i][bolthelyek[i]++] = szinek[aktivjatekos];
            document.getElementById(szinek[aktivjatekos++]).style.border = "2px solid black";
          
            if (aktivjatekos === jatekosszam)
            {
                aktivjatekos = 0;
            }

            document.getElementById(szinek[aktivjatekos]).style.border = "2px solid red";
        }
    }

    let sor = document.createElement("ul");
    sor.id = "sor" + i;
    sor.className = "sor";

    for (let j = 0; j < 8; j++)
    {
        let hely = document.createElement("li");

        hely.id = "hely" + j;
        hely.className = "hely";

        sor.appendChild(hely);
    }

    bolt.appendChild(sor);

    let kartyahely = document.createElement("div");

    kartyahely.id = "kartyahely" + i;
    kartyahely.className = "kartyahely";

    bolt.appendChild(kartyahely);

    return bolt;
}

function bazarletrehozas()
{
    let bazar = document.createElement("div");

    bazar.innerHTML = "BAZÁR";
    bazar.id = "bazar";

    let sor = document.createElement("ul");

    sor.id = "bazarsor";
    sor.className = "sor";

    bazar.onclick = function(){
        if (bazarhely !== 14)
        {
            document.getElementById("bazarsor").children[bazarhely].style.backgroundColor = szinek[aktivjatekos];
            document.getElementById("bazarsor").children[bazarhely].style.backgroundImage = "url(kepek/" + aktivjatekos + ".png)";

            bazarsor[bazarhely++] = szinek[aktivjatekos];
            document.getElementById(szinek[aktivjatekos++]).style.border = "2px solid black";
            
            if (aktivjatekos === jatekosszam)
            {
                aktivjatekos = 0;
            }

            document.getElementById(szinek[aktivjatekos]).style.border = "2px solid red";
        }
    }

    for (let i = 0; i < 14; i++)
    {
        let hely = document.createElement("li");

        hely.id = "hely" + i;
        hely.className = "hely";
        sor.appendChild(hely);
    }

    bazar.appendChild(sor);

    let kartyadoboz = document.createElement("div");

    kartyadoboz.id = "kartyadoboz";

    for (let i = 0; i < 5; i++)
    {
        let kartyahely = document.createElement("div");

        kartyahely.id = "bazarkartyahely" + i;
        kartyahely.className = "bazarkartyahely";
        kartyadoboz.appendChild(kartyahely);
    }

    bazar.appendChild(kartyadoboz);

    return bazar;
}

function szinekvalasztasa()
{
    let szinvalaszto = document.createElement("div");

    szinvalaszto.id = "szinek";

    for(let i = 0; i < jatekosszam; i++)
    {
        let szin = document.createElement("div");
        szin.className = "szin";
        szin.id = szinek[i];
        szin.style.backgroundColor = szinek[i];

        szinvalaszto.appendChild(szin);
    }
    return szinvalaszto;
}