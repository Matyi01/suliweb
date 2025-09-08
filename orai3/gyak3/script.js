let pic = [
    ["red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red", "red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red"],
    ["red", "red", "red", "blue", "red", "blue", "red", "yellow", "red", "red", "red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red"],
    ["red", "green", "red", "blue", "red", "blue", "red", "red", "yellow", "red", "red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red"],
    ["red", "red", "green", "blue", "red", "blue", "red", "yellow", "red", "red", "red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red"],
    ["red", "green", "red", "blue", "red", "blue", "red", "red", "yellow", "red", "red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red"],
    ["red", "red", "green", "blue", "red", "blue", "red", "yellow", "red", "red", "red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red"],
    ["red", "green", "red", "blue", "red", "blue", "red", "red", "yellow", "red", "red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red"],
    ["red", "red", "green", "blue", "red", "blue", "red", "yellow", "red", "red", "red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red"],
    ["red", "green", "red", "blue", "red", "blue", "red", "red", "yellow", "red", "red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red"],
    ["red", "red", "green", "blue", "red", "blue", "red", "yellow", "red", "red", "red", "red", "red", "blue", "red", "blue", "red", "red", "yellow", "red"]];

function init() {
    let pixelh = 10;
    let pixelw = 10;
    let h = 10;
    let w = 20;
    for (let i = 0; i < h; i++) {
        let row = document.createElement("div");
        row.style.lineHeight = 0;
        for (let j = 0; j < w; j++) {
            let color = pic[i][j]
            let p = pixel(pixelh, pixelw, color);
            p.setAttribute("id", i+" "+j);

            row.appendChild(p);
        }
        document.getElementById("matrix").appendChild(row);
    }
}

function pixel(h, w, c) {
    let pixel = document.createElement("span");
    pixel.style.width = w + "px";
    pixel.style.height = h + "px";
    pixel.style.backgroundColor = c;
    pixel.style.display = "inline-block";
    return pixel;
}


