function feladat1() {
    let naygKeret = document.getElementById("nagyKeret");
    let keret = document.createElement("div");
    keret.setAttribute("id", "keret");
    let szovegMezo = document.createElement("input");
    szovegMezo.setAttribute("type", "text");
    szovegMezo.classList.add("form-control", "m-1");
    szovegMezo.setAttribute("id", "szoveg");
    let torol = document.createElement("button");
    torol.classList.add("btn", "btn-light", "m-1");
    torol.textContent = "X";
    torol.addEventListener("click", function () {
        keret.remove();
    });
    let fel = document.createElement("button");
    fel.classList.add("btn", "btn-light", "m-1");
    fel.addEventListener("click", function () {
        if (this.parentNode.previousSibling !== null)
            this.parentNode.parentNode.insertBefore(this.parentNode, this.parentNode.previousSibling)
    });
    fel.textContent = "↑";
    let le = document.createElement("button");
    le.classList.add("btn", "btn-light", "m-1");
    le.textContent = "↓";
    le.addEventListener("click", function () {
        if (this.parentNode.nextSibling !== null)
            this.parentNode.parentNode.insertBefore(this.parentNode.nextSibling, this.parentNode)
    });

    szovegMezo.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            if (szovegMezo.value === "") {
                alert("Valami kell a mezőbe!")
            }
            else {
                let szoveg = document.createElement("label");
                szoveg.classList.add("form-control", "m-1");
                szoveg.innerHTML = szovegMezo.value;
                szoveg.addEventListener("dblclick", function () {
                    keret.replaceChild(szovegMezo, keret.childNodes[0]);
                });
                keret.replaceChild(szoveg, keret.childNodes[0]);
            }

        }
    });
    let pipa = document.createElement("button");
    pipa.classList.add("btn", "btn-light", "m-1");
    pipa.addEventListener("click", function () {
        let elsoElem = keret.childNodes[0];
        elsoElem.style.backgroundColor = "lightgreen";
    });
    pipa.textContent = "✔";

    keret.appendChild(szovegMezo);
    keret.appendChild(torol);
    keret.appendChild(fel);
    keret.appendChild(le);
    keret.appendChild(pipa);
    naygKeret.appendChild(keret);
    szovegMezo.focus()
}