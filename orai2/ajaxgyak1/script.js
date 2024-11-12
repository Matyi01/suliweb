const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    document.getElementById("main").appendChild(nevjegy(JSON.parse(this.responseText).results[0]));
    console.log(JSON.parse(this.responseText).results[0]);
}

xhttp.open("GET", 'https://randomuser.me/api/');
xhttp.send();

function nevjegy(adatok){
    let tarolo = document.createElement("div");

    let kep = document.createElement("img");
    kep.src = adatok.picture.large
    tarolo.appendChild(kep);

    let nev = document.createElement("h2");
    nev.innerHTML = adatok.name.title + " " + adatok.name.first + " " + adatok.name.last;
    tarolo.appendChild(nev);

    let gender = document.createElement("h4");
    gender.innerHTML = adatok.gender;
    tarolo.appendChild(gender);

    let email = document.createElement("h4");
    email.innerHTML = "Email: " + adatok.email;
    tarolo.appendChild(email);

    let cell = document.createElement("h4");
    cell.innerHTML = "Tel.: " + adatok.cell;
    tarolo.appendChild(cell);

    return tarolo;
}