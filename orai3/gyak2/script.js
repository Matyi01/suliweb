/*
bootstrap, oldal közepén nagy méretben (50%) kis méretben (100%) legyen kitöltve a tertalom,
jelenjen meg ebben valamilyen szinű téglalap, ebben egy idézet, 
tárbol jöjjön, 5mp ként elozo idezet teglalapja ele egy ujabb veletlenszeru idezet az idezettartbol, 
egyszerre max 3 idezet +feladat animálva csuszas
*/

let idezetek = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Quisque sit amet vestibulum tellus, id aliquam orci.",
    "Vestibulum quis porta arcu.",
    "Fusce posuere est eu neque dignissim, malesuada tincidunt arcu pharetra.",
    "Proin at vehicula diam, vitae eleifend risus."
]

function init() {
    setInterval(repeat(), 5000);


}

function repeat() {
    let teglalap = document.createElement("div");
    teglalap.style.width = "200px";
    teglalap.style.height = "100px";
    teglalap.style.border = "2px solid black";
    teglalap.innerHTML = idezetek[Math.floor(Math.random() * idezetek.length)];
    document.getElementById("tartalom").appendChild(teglalap);
    document.getElementById("tartalom").removeChild(document.getElementById("tartalom").firstElementChild);



}