let szinek = ["blue","red","green","yellow","brown","orange"];
let aktivjatekos = 0;
let bolthelyek = [0, 0, 0, 0, 0];
function init()
{
    let tabla = document.getElementById("tabla");
    //boltok lerakása
    for (let i = 0; i < 5; i++)
    {
        let bolt = document.createElement("div");
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
        tabla.appendChild(bolt);
    }

    //bazár lerakása
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
    tabla.appendChild(bazar);
    
    //játékosszám
    let jatekosszam = 6;

    //szinek válsztása
    let szinvalaszto = document.createElement("div");
    szinvalaszto.id = "szinek";
    for(let i = 0; i < jatekosszam; i++)
    {
        let szin = document.createElement("div");
        szin.id = szinek[i];
        szin.style.backgroundColor = szinek[i];
        szinvalaszto.appendChild(szin);
    }
    tabla.appendChild(szinvalaszto);
    document.getElementById(szinek[aktivjatekos]).style.border = "2px solid red";
}
