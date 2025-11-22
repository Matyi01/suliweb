let adatok = {};

function init() {

}

const url = "https://bitkozpont.mik.uni-pannon.hu/2025/gettasks.php";
fetch(url, {
    method: "POST",
    body: JSON.stringify({
        id: "3",
        teamcode: "f1e1ae76b73a8b7aa51b"
    }),
})
    .then((response) => response.json())
    .then(function (json) {
        adatok = json;

        elso();

    });


function elso() {

    console.log(adatok)

    adatok.data.questions.forEach(e => {
        positions = [];

        e.params.positions.forEach(pos => {
            positions.push(pos);
        });

        positions.forEach(pos => {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(250 + pos.x * 2, 250 + pos.y * 2, 20, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#666"
        ctx.fill();
        }
        )


    });





}
