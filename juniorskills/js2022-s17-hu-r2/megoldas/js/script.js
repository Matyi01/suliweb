function katt() {
    let gyerek = parseInt(document.getElementById("gyerek").value);
    let felnott = parseInt(document.getElementById("felnott").value);


    if (!(!isNaN(gyerek) && gyerek >= 0 && !isNaN(felnott) && felnott >= 0)) {
        alert("A megadott érték nem egész szám! A létszám legyen legalább 0");
        document.getElementById("alert").classList.add("d-none");
        return;
    }
    let ertek = felnott * 40000 + gyerek * 28000;
    
    /*
    <div class="alert alert-info" role="alert">
        A simple info alert—check it out!
    </div>
    */

    document.getElementById("alert").classList.remove("d-none");
    document.getElementById("result").innerHTML = ertek;
}

function becsuk(){
    document.getElementById("alert").classList.add("d-none");
}