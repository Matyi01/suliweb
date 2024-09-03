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
            uj.dataset.hatterkep = "url(kepek/" + kepekurl[i] + ")";
            uj.onclick = function(){
                if(kattintas === 0)
                {
                    orastart();
                }
                kattintas++;
                document.getElementById("kattintasok").innerHTML = "Kattintások száma: " + kattintas;
                if (lathatolapok.length < 2 && !lathatolapok.includes(uj))
                {
                    lathatolapok.push(uj);
                    uj.style.backgroundImage = "url(kepek/" + kepekurl[i] + ")";
                    uj.dataset.felforditva = "true";
                }
                if (lathatolapok.length === 2)
                {
                    visszafordit();
                    //setTimeout(visszafordit, 2000);
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

let aktiv = [];
const megtalaltparok = [];
function visszafordit()
{
    for (let i = 0; i < lathatolapok.length; i++)
    {
        aktiv.push(lathatolapok[i]);
    }

    if(aktiv.length >= 2)
    {
        if (aktiv[0].style.backgroundImage !== aktiv[1].style.backgroundImage)
        {
            setTimeout(nemparvisszafordit, 2000);

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
            aktiv[0].dataset.felforditva = "";
            aktiv[1].dataset.felforditva = "";
        
            const lapok = document.getElementById("asztal").children;
            for(let i = 0; i < lapok.length; i++)
            {
                lapok[i].style.backgroundImage = "";
            }
        
            for(let i = 0; i < megtalaltparok.length; i++)
            {
                megtalaltparok[i].style.backgroundImage = megtalaltparok[i].dataset.hatterkep;
            }
        
            lathatolapok = [];
            aktiv = [];
        }
    }

}

function nemparvisszafordit()
{
    aktiv[0].style.backgroundImage = "";
    aktiv[1].style.backgroundImage = "";
    aktiv = [];
}

let starttime = "";
let timer;
function orastart()
{
    starttime = new Date();

    timer = setInterval(orashow, 100);
}
function orashow()
{
    const aktualtume = new Date();

    const kulonbseg = aktualtume - starttime;

    const ido = new Date(kulonbseg);
    const mp = ido.getSeconds();
    const perc = ido.getMinutes();

    document.getElementById("ido").innerHTML = perc + ":" + (mp < 10 ? "0" : "") + mp + "." + Math.floor(ido.getMilliseconds()/100);
}

function nyertel()
{
    let uj = document.createElement("div");
    uj.innerHTML = "Game over";
    document.getElementsByTagName("header")[0].appendChild(uj);
    clearInterval(timer);
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