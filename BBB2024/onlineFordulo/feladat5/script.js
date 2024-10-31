function ertekeles() {
    let szoveg = document.getElementById("bekeres").value;

    if (szoveg == "") {
        document.getElementById("error").innerHTML = "Ez nem bináris szám";
        return;
    }
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i] != "0" && szoveg[i] != "1") {
            document.getElementById("error").innerHTML = "Ez nem bináris szám";
            return;
        }
    }

    document.getElementById("error").innerHTML = "";

    document.getElementById("sum1").innerHTML = szoveg.split("1").length - 1;

    document.getElementById("sum0").innerHTML = szoveg.split("0").length - 1;

    let long1 = "";
    let long1Array = [];
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i] === "1")
            long1 += "1";
        else {
            long1Array.push(long1)
            long1 = "";
        }
    }
    long1Array.push(long1);
    document.getElementById("long1").innerHTML = long1Array.reduce(function (a, b) { return a.length > b.length ? a : b; });

    let long0 = "";
    let long0Array = [];
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i] === "0")
            long0 += "0";
        else {
            long0Array.push(long0)
            long0 = "";
        }
    }
    long0Array.push(long0);
    document.getElementById("long0").innerHTML = long0Array.reduce(function (a, b) { return a.length > b.length ? a : b; });

    let longMix = szoveg[0];
    let longMixArray = [];
    for (let i = 1; i < szoveg.length; i++) {
        if (longMix[longMix.length - 1] !== szoveg[i])
            longMix += szoveg[i];
        else {
            longMixArray.push(longMix);
            longMix = szoveg[i];
        }
    }
    longMixArray.push(longMix);
    document.getElementById("longMix").innerHTML = longMixArray.reduce(function (a, b) { return a.length > b.length ? a : b; });

    let allSubstrings = getAllSubstrings(szoveg);
    let duplicate = [];
    for (let i = 0; i < allSubstrings.length; i++) {
        for (let j = i + 1; j < allSubstrings.length; j++) {
            if (allSubstrings[i] === allSubstrings[j])
                duplicate.push(allSubstrings[i])
        }
    }
    document.getElementById("longDouble").innerHTML = duplicate.reduce(function (a, b) { return a.length > b.length ? a : b; });

}

function randszam() {
    let hossz = document.getElementById("szam").value;
    let szamok = ["0", "1"];
    let szam = "";
    for (let i = 0; i < hossz; i++) {
        szam += szamok[Math.floor(Math.random() * 2)];
    }
    document.getElementById("bekeres").value = szam;
}

function getAllSubstrings(str) {
    //https://stackoverflow.com/questions/40818769/get-all-substrings-of-a-string-in-javascript
    var i, j, result = [];

    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}