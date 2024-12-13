let products = [];

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => termekek(json))

function termekek(tomb) {
    products = tomb;
    console.log(products);

    products.forEach(element => {
        let keret = document.createElement("div");
        keret.classList.add("keret");

        let cim = document.createElement("p");
        cim.classList.add("cim");
        cim.innerHTML = element.title;
        keret.appendChild(cim);

        let kep = document.createElement("img");
        kep.classList.add("kep");
        kep.src = element.image;
        keret.appendChild(kep);

        let leiras = document.createElement("p");
        leiras.classList.add("leiras");
        leiras.innerHTML = element.description;
        keret.appendChild(leiras);

        keret.onclick = function () {
            let item = document.getElementById("item");
            item.innerHTML = "";
            
            let cim2 = document.createElement("p");
            cim2.classList.add("cim");
            cim2.innerHTML = element.title;
            item.appendChild(cim2);

            let kep2 = document.createElement("img");
            kep2.classList.add("kep");
            kep2.src = element.image;
            item.appendChild(kep2);

            let leiras2 = document.createElement("p");
            leiras2.classList.add("leiras");
            leiras2.innerHTML = element.description;
            item.appendChild(leiras2);


            let kategoria = document.createElement("p");
            kategoria.classList.add("kategoria");
            kategoria.innerHTML = element.category;
            item.appendChild(kategoria);

            let ar = document.createElement("p");
            ar.classList.add("ar");
            ar.innerHTML = element.price + " $";
            item.appendChild(ar);

            let db = document.createElement("p");
            db.classList.add("db");
            db.innerHTML = element.rating.count;
            item.appendChild(db);

            let ertekeles = document.createElement("p");
            ertekeles.classList.add("ertekeles");
            ertekeles.innerHTML = element.rating.rate;
            item.appendChild(ertekeles);
        }

        document.getElementById("itemlist").appendChild(keret);
    });
}