function hover() {
    let gomb = document.getElementById("gomb");
    let x = gomb.getBoundingClientRect().left;
    let y = gomb.getBoundingClientRect().top;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let gombWidth = gomb.getBoundingClientRect().width;
    let gombHeight = gomb.getBoundingClientRect().height;

    let ujx = Math.floor(Math.random() * width-gombWidth) + 1;
    let ujy = Math.floor(Math.random() * height-gombHeight) + 1;

    gomb.getBoundingClientRect().left = "100px";
    gomb.getBoundingClientRect().top = "100px";
    
    document.styleSheets[0].style.left = "100px";
    document.styleSheets[i].style.top = "100px";



    console.log(x, y, ujx, ujy, width, height, gombHeight, gombWidth);
}