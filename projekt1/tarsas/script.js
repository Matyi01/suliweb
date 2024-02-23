function init()
{
    let tabla = document.getElementById("tabla");
    for (let i = 0; i < 5; i++)
    {
        let bolt = document.createElement("div");
        bolt.id = "bolt" + i;
        let sor = document.createElement("ul");
        sor.id = "sor" + i;
        for (let j = 0; j < 8; j++)
        {
            let hely = document.createElement("li");
            hely.id = "hely" + i;
            sor.appendChild(hely);
        }
        bolt.appendChild(sor);
        tabla.appendChild(bolt);
    }
}
