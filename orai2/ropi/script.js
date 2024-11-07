function katt() {
    let beker = document.createElement("input");
    beker.type = "text";
    beker.id = "bekeres";
    beker.addEventListener("keypress", enter)
    document.getElementById("eredmeny").prepend(beker);
    console.log(beker);
}

function enter(event) {
    if (event.key === "Enter") {
        sorkeszit();
    }
}

function sorkeszit() {
    let sor = document.getElementById("bekeres").value;
    if (sor !== "") {
        let lista = document.getElementById("eredmeny");
        let ujsor = document.createElement("li");
        let szoveg = document.createElement("span")

        let torolgomb = document.createElement("input");
        torolgomb.type = "button";
        torolgomb.classList.add("gomb");
        torolgomb.value = "x";
        torolgomb.onclick = function () {
            this.parentElement.remove();
        }

        let felgomb = document.createElement("input");
        felgomb.type = "button";
        felgomb.classList.add("gomb");
        felgomb.value = "^";
        felgomb.onclick = function () {
            if (!(lista.children[0] === this.parentElement)) {
                lista.insertBefore(this.parentElement, this.parentElement.previousSibling);
                this.parentElement = this.parentElement.previousSibling;
            }
        }

        let legomb = document.createElement("input");
        legomb.type = "button";
        legomb.classList.add("gomb");
        legomb.value = "v";
        legomb.onclick = function () {
            if (!(lista.children[lista.children.length - 1] === this.parentElement)) {
                lista.insertBefore(this.parentElement, this.parentElement.nextSibling.nextSibling);
                this.parentElement = this.parentElement.nextSibling;
            }
        }

        let szerkesztgomb = document.createElement("input");
        szerkesztgomb.type = "button";
        szerkesztgomb.classList.add("gomb");
        szerkesztgomb.value = "Szerkesztés";
        szerkesztgomb.onclick = function () {
            let beker = document.createElement("input");
            beker.type = "text";
            beker.id = "bekeres";
            beker.value = this.parentElement.firstChild.innerHTML;
            let gomb = this;
            beker.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {

                    let szoveg = document.createElement("span");
                    szoveg.innerHTML = gomb.parentElement.firstChild.value;
                    gomb.parentElement.firstChild.remove();
                    gomb.parentElement.insertBefore(szoveg, gomb.parentElement.firstChild);
                }
            })
            this.parentElement.firstChild.remove();
            this.parentElement.insertBefore(beker, this.parentElement.firstChild);
        }

        ujsor.appendChild(szoveg);
        ujsor.firstChild.innerHTML = sor;
        ujsor.appendChild(felgomb);
        ujsor.appendChild(legomb);
        ujsor.appendChild(szerkesztgomb);
        ujsor.appendChild(torolgomb);

        lista.prepend(ujsor);


        document.getElementById("bekeres").remove();
    }
}