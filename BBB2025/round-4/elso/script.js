let szamok = [];

function katt() {
    let szam = document.getElementById("szam").value;

    if (szam > 0) {
        szamok.push(szam);
        document.getElementById("ki").innerText = szamok.join(", ");
        document.getElementById("szam").value = ""
    }
    else if (szam < 0) {
        if (szamok.length > 1) {
            let sorozat = [szamok[0]];
            let sorozatok = [];
            for (let i = 1; i < szamok.length; i++) {
                if (sorozat[sorozat.length - 1] < szamok[i]) {
                    sorozat.push(szamok[i]);
                }
                else {
                    //sorozat mentése egy nagy tömbbe, ebből a leghosszabb kiiratása
                    sorozatok.push(sorozat);
                    sorozat = [szamok[i]];
                }
            }

            sorozatok.push(sorozat)


            document.getElementById("ki2").innerText = sorozatok.reduce(function (a, b) { return a.length > b.length ? a : b; }).join(", ");

            szamok = [];
        }
    }
}
