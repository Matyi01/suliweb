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
var kattintas = 0;
function init()
{
    kepkirakas();
}
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
                uj.style.backgroundImage = "url(kepek/" + kepekurl[i] + ")";
                kattintas++;
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


function kever(points) {
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  return points;
}