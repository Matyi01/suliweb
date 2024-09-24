let inputsor = document.createElement("tr");

let datuminputcella = document.createElement("td");
let literinputcella = document.createElement("td");
let forintinputcella = document.createElement("td");

let datuminput = document.createElement("input");
let literinput = document.createElement("input");
let forintinput = document.createElement("input");

datuminput.type = "date";
literinput.type = "number";
forintinput.type = "number";

datuminput.id = "datuminput";
literinput.id = "literinput";
forintinput.id = "forintinput";

datuminputcella.appendChild(datuminput);
literinputcella.appendChild(literinput);
forintinputcella.appendChild(forintinput);

inputsor.appendChild(datuminputcella);
inputsor.appendChild(literinputcella);
inputsor.appendChild(forintinputcella);

document.getElementById("tankolasok").appendChild(document.createElement("tfoot")).appendChild(inputsor);

let ev = 0;
let honap = 0;
let nap = 0;
let liter = 0;
let forint = 0;
let adatok = [];
let havibontas = [];

function hozzaad(){
    ev = document.getElementById("datuminput").value.split("-")[0];
    honap = document.getElementById("datuminput").value.split("-")[1];
    nap = document.getElementById("datuminput").value.split("-")[2];
    liter = document.getElementById("literinput").value;
    forint = document.getElementById("forintinput").value;
    adatok.push([ev, honap, nap, liter, forint])

    let ujsor = document.createElement("tr")

    let datumcella = document.createElement("td");
    let litercella = document.createElement("td");
    let forintcella = document.createElement("td");

    datumcella.innerHTML = ev + " " + honap + " " + nap;
    litercella.innerHTML = liter;
    forintcella.innerHTML = forint;

    ujsor.appendChild(datumcella);
    ujsor.appendChild(litercella);
    ujsor.appendChild(forintcella);

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


    console.log(havibontas);
    document.getElementById("havikiadas").innerHTML = "";

    for (let i = 0; i < havibontas.length; i++){
        for (let j = 0; j < 4; j++){
            document.getElementById("havikiadas").innerHTML += havibontas[i][j] + " ";
        }
        document.getElementById("havikiadas").innerHTML += "<br>";
    }
}
