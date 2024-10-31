let row = 5;
let column = 4;


function init() {
    let click = 0;
    let player = 1;
    let clicked = [];

    let tabla = document.createElement("table");
    for (let i = 0; i < row * 2 + 1; i++) {
        let sor = document.createElement("tr")
        for (let j = 0; j < row * 2 + 1; j++) {
            let cella = document.createElement("td")
            if (i % 2 === 0 && j % 2 === 0)
                cella.classList.add("pont");
            else if (i % 2 === 0 && j % 2 === 1) {
                cella.onclick = function () {
                    click++;
                    clicked.push(this);
                    player *= -1;

                    if (player === 1) {
                        this.dataset.player = 1;
                        document.getElementById("aktivp").innerHTML = 1;
                    }
                    else {
                        this.dataset.player = 2;
                        document.getElementById("aktivp").innerHTML = 2;
                    }

                    if (click > 0) {
                        clicked[clicked.length - 1].style.backgroundColor = "grey";
                        for (let i = 0; i < clicked.length; i++)
                            clicked[i].style.backgroundColor = "grey";
                        for (let i = clicked.length - 1; i >= 0; i--) {
                            if (clicked[i].dataset.player === this.dataset.player)
                                clicked[i].style.backgroundColor = "red";
                            else
                                break;
                        }
                    }

                    this.style.backgroundColor = "red";


                    if (i < row * 2 && tabla.children[i + 1].children[j - 1].dataset.player != 0 && tabla.children[i + 1].children[j + 1].dataset.player != 0 && tabla.children[i + 2].children[j].dataset.player != 0) {
                        tabla.children[i + 1].children[j].innerHTML = this.dataset.player;
                        player *= -1;
                    }
                    if (i > 0 && tabla.children[i - 1].children[j - 1].dataset.player != 0 && tabla.children[i - 1].children[j + 1].dataset.player != 0 && tabla.children[i - 2].children[j].dataset.player != 0) {
                        tabla.children[i - 1].children[j].innerHTML = this.dataset.player;
                        player *= -1;
                    }
                }
                cella.dataset.player = 0;
                cella.classList.add("hel");
            }
            else if (i % 2 === 1 && j % 2 === 0) {
                cella.onclick = function () {
                    click++;
                    clicked.push(this);
                    player *= -1;

                    if (player === 1) {
                        this.dataset.player = 1;
                        document.getElementById("aktivp").innerHTML = 1;
                    }
                    else {
                        this.dataset.player = 2;
                        document.getElementById("aktivp").innerHTML = 2;
                    }



                    if (click > 0) {
                        clicked[clicked.length - 1].style.backgroundColor = "grey";
                        for (let i = 0; i < clicked.length; i++)
                            clicked[i].style.backgroundColor = "grey";
                        for (let i = clicked.length - 1; i >= 0; i--) {
                            if (clicked[i].dataset.player === this.dataset.player)
                                clicked[i].style.backgroundColor = "red";
                            else
                                break;
                        }
                    }
                    this.style.backgroundColor = "red";


                    if (j < column * 2 && tabla.children[i - 1].children[j + 1].dataset.player != 0 && tabla.children[i].children[j + 2].dataset.player != 0 && tabla.children[i + 1].children[j + 1].dataset.player != 0) {
                        tabla.children[i].children[j + 1].innerHTML = this.dataset.player;
                        player *= -1;
                    }
                    if (j > 0 && tabla.children[i - 1].children[j - 1].dataset.player != 0 && tabla.children[i].children[j - 1].dataset.player != 0 && tabla.children[i + 1].children[j - 1].dataset.player != 0) {
                        tabla.children[i].children[j - 1].innerHTML = this.dataset.player;
                        player *= -1;
                    }
                }
                cella.dataset.player = 0;
                cella.classList.add("vel");
            }
            else if (i % 2 === 1 && j % 2 === 1)
                cella.classList.add("belso");
            sor.appendChild(cella);
        }
        tabla.appendChild(sor)
    }
    document.getElementById("main").appendChild(tabla);

}