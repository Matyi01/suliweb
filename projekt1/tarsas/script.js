let szinek = ["blue","red","green","yellow","brown","orange"];
let aktivjatekos = 0;
let bolthelyek = [0, 0, 0, 0, 0];
let boltwidth = 150;
let boltheight = 300;
let jatekosszam = 6;

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

    bolt.style.height = boltheight + "px";
    bolt.style.width = boltwidth + "px";
    bolt.style.top = "20px";
    bolt.style.left = 25 + i * (boltwidth + 25) + "px";

    bolt.id = "bolt" + i;
    bolt.onclick = function(){
        document.getElementById("bolt" + i).children[0].children[bolthelyek[i]++].style.backgroundColor = szinek[aktivjatekos];
        document.getElementById(szinek[aktivjatekos]).style.border = "2px solid black";
        document.getElementById(szinek[++aktivjatekos]).style.border = "2px solid red";
    };
    let sor = document.createElement("ul");
    sor.id = "sor" + i;
    for (let j = 0; j < 8; j++)
    {
        let hely = document.createElement("li");
        hely.id = "hely" + j;
        sor.appendChild(hely);
    }
    bolt.appendChild(sor);
    return bolt;
}

function bazarletrehozas()
{
    let bazar = document.createElement("div");
    bazar.id = "bazar";
    let sor = document.createElement("ul");
    sor.id = "bazarsor";
    for (let i = 0; i < 14; i++)
    {
        let hely = document.createElement("li");
        hely.id = "hely" + i;
        sor.appendChild(hely);
    }
    bazar.appendChild(sor);
    return bazar;
}

function szinekvalasztasa()
{
    let szinvalaszto = document.createElement("div");
    szinvalaszto.id = "szinek";
    for(let i = 0; i < jatekosszam; i++)
    {
        let szin = document.createElement("div");
        szin.id = szinek[i];
        szin.style.backgroundColor = szinek[i];
        szinvalaszto.appendChild(szin);
    }
    return szinvalaszto;
}