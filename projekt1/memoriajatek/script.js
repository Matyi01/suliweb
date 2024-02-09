var kepekurl = [
    "1.png",
    "2.png",
    "3.png",
    "4.jpg",
    "5.jpg",
    "6.png",
    "7.png",
    "8.jpg"
];
var pardb = 4;
function init()
{
    kepkirakas();
}
var kattintas = 0;
let lathatolapok = [];
function kepkirakas()
{
    let asztal = document.getElementById("asztal");

    let kartyak = [];

    for(let j = 0; j < 2; j++)
    {
        for(let i = 0; i < pardb; i++)
        {
            let uj = document.createElement("div");
            uj.className = "kartya";
            uj.onclick = function(){
                //if (typeof uj.dataset.felforditva === 'undefined' || uj.dataset.felforditva === null)
                //if (lathatolapok.length < 2 &&!(typeof uj.dataset.felforditva !== 'undefined' && uj.dataset.felforditva !== null) &&uj.dataset.felforditva !== "true")
                if (lathatolapok.length < 2 && !lathatolapok.includes(uj))
                {
                    lathatolapok.push(uj);
                    uj.style.backgroundImage = "url(kepek/" + kepekurl[i] + ")";
                    uj.dataset.felforditva = "true";
                }
                if (lathatolapok.length === 2)
                {
                    setTimeout(visszafordit, 2000);
                }
            };
            
            kartyak.push(uj);
        }
    }

    kartyak = kever(kartyak);

    for(let i = 0; i < kartyak.length; i++)
    {
        asztal.appendChild(kartyak[i]);
    }
}   

const megtalaltparok = [];
function visszafordit()
{
    const aktiv = [];
    for (let i = 0; i < lathatolapok.length; i++)
    {
        aktiv.push(lathatolapok[i]);
    }

    if(aktiv.length >= 2)
    {
        if (aktiv[0].style.backgroundImage !== aktiv[1].style.backgroundImage)
        {
            aktiv[0].style.backgroundImage = "";
            aktiv[1].style.backgroundImage = "";
        }
        else
        {
            aktiv[0].onclick = "";
            aktiv[1].onclick = "";
            megtalaltparok.push(aktiv[0]);
            megtalaltparok.push(aktiv[1]);
            if (!vanemeg())
            {
                nyertel();
            }
        }
    }
    aktiv[0].dataset.felforditva = "";
    aktiv[1].dataset.felforditva = "";

    const lapok = document.getElementById("asztal").children;
    for(let i = 0; i < lapok.length; i++)
    {
        lapok[i].style.backgroundImage = "";
    }

    for(let i = 0; i < megtalaltparok.length; i++)
    {
        megtalaltparok[i].style.backgroundImage = "";
    }

    lathatolapok = [];
}

function nyertel()
{
    let uj = document.createElement("div");
    uj.innerHTML = "Game over";
    document.getElementsByTagName("header")[0].appendChild(uj);
    
}

function vanemeg()
{
    let db = 0;
    const lapok = document.getElementById("asztal").children;
    for (let i = 0; i < lapok.length; i++)
    {
        if (lapok[i].style.backgroundImage === "")
        {
            db++;
        }
    }
    return db > 0;
}

function kever(points) 
{
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  return points;
}