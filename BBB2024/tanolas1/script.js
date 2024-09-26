let inputsor = document.createElement("tr");

let datuminputcella = document.createElement("td");
let literinputcella = document.createElement("td");
let forintinputcella = document.createElement("td");
let kminputcella = document.createElement("td");

let datuminput = document.createElement("input");
let literinput = document.createElement("input");
let forintinput = document.createElement("input");
let kminput = document.createElement("input");


datuminput.type = "date";
literinput.type = "number";
forintinput.type = "number";
kminput.type = "number";

datuminput.id = "datuminput";
literinput.id = "literinput";
forintinput.id = "forintinput";
kminput.id = "kminput";


datuminputcella.appendChild(datuminput);
literinputcella.appendChild(literinput);
forintinputcella.appendChild(forintinput);
kminputcella.appendChild(kminput);

inputsor.appendChild(datuminputcella);
inputsor.appendChild(literinputcella);
inputsor.appendChild(forintinputcella);
inputsor.appendChild(kminputcella);

document.getElementById("tankolasok").appendChild(document.createElement("tfoot")).appendChild(inputsor);

let ev = 0;
let honap = 0;
let nap = 0;
let liter = 0;
let forint = 0;
let km = 0;
let adatok = [];
let havibontas = [];

function hozzaad(){
    ev = document.getElementById("datuminput").value.split("-")[0];
    honap = document.getElementById("datuminput").value.split("-")[1];
    nap = document.getElementById("datuminput").value.split("-")[2];
    liter = document.getElementById("literinput").value;
    forint = document.getElementById("forintinput").value;
    km = document.getElementById("kminput").value;

    adatok.push([ev, honap, nap, liter, forint, km])

    let ujsor = document.createElement("tr")

    let datumcella = document.createElement("td");
    let litercella = document.createElement("td");
    let forintcella = document.createElement("td");
    let kmcella = document.createElement("td");

    datumcella.innerHTML = ev + " " + honap + " " + nap;
    litercella.innerHTML = liter;
    forintcella.innerHTML = forint;
    kmcella.innerHTML = km;

    ujsor.appendChild(datumcella);
    ujsor.appendChild(litercella);
    ujsor.appendChild(forintcella);
    ujsor.appendChild(kmcella);

    document.getElementById("tankolasok").appendChild(ujsor);

    if (havibontas.length === 0){
        havibontas.push([ev, honap, Number(liter), Number(forint)])
    }
    else{
        let van = 0;
        for (let j = 0; j < havibontas.length; j++){
            if (havibontas[j][0] === ev && havibontas[j][1] === honap){
                havibontas[j][2] += Number(liter);
                havibontas[j][3] += Number(forint);
                van = 1;
            }
        }
        if (van === 0){
            havibontas.push([ev, honap, Number(liter), Number(forint)])
        }
    }

    document.getElementById("havikiadas").innerHTML = "";

    for (let i = 0; i < havibontas.length; i++){
        document.getElementById("havikiadas").innerHTML += havibontas[i][0] + ". " + havibontas[i][1] + ". " + havibontas[i][2] + "L " + havibontas[i][3] + "Ft<br>";
    }
}
function szures(){
    let elejeev = document.getElementById("eleje").value.split("-")[0];
    let elejehonap = document.getElementById("eleje").value.split("-")[1];
    let elejenap = document.getElementById("eleje").value.split("-")[2];
    let vegeev = document.getElementById("vege").value.split("-")[0];
    let vegehonap = document.getElementById("vege").value.split("-")[1];
    let vegenap = document.getElementById("vege").value.split("-")[2];
    let kiirando = [];

    for (let i = 0; i < adatok.length; i++){
        if (adatok[i][0] >= elejeev && adatok[i][0] <= vegeev){
            if (adatok[i][1] >= elejehonap && adatok[i][1] <= vegehonap){
                if (adatok[i][2] >= elejenap && adatok[i][2] <= vegenap){
                    kiirando.push(adatok[i]);
                }
            }
        }
    }


    document.getElementById("szures").innerHTML = "";
    for (let i = 0; i < kiirando.length; i++){
        document.getElementById("szures").innerHTML += kiirando[i][0] + ". " + kiirando[i][1] + ". " + kiirando[i][2] + ". " + kiirando[i][3] + "L " + kiirando[i][4] + "Ft " + kiirando[i][5] + "Km<br>";
    }
}