let c = document.getElementById("canvas")
let ctx = c.getContext("2d");
let bolygok = []
let bolygoSzam = Math.floor((Math.random() * 6) + 1)
let palyak = Math.floor((Math.random() * 2) + 2)
let palyaMeretek = []
let bolygoPalya = []

for (let i = 0; i < bolygoSzam; i++) {
	bolygok.push({
		r: Math.floor((Math.random() * 11) + 5),
		szog: Math.floor((Math.random() * 361))
	})
}

for (let i = 0; i < palyak; i++) {
	if (palyaMeretek.length == 0) {
		palyaMeretek.push(Math.floor((Math.random() * 70) + 60))
	}
	else {
		palyaMeretek.push(palyaMeretek[i - 1] * (Math.random() * 0.3 + 1.2))
	}
}
for (let i = 0; i < bolygoSzam; i++) {
	bolygok[i].palya = i % palyak
}

function Rajzol() {
	ctx.beginPath()
	ctx.clearRect(0, 0, 500, 500)
	rendszer()
	mozgas()
	requestAnimationFrame(Rajzol);
}

function mozgas() {
	let pi = Math.PI
	for (let k = 0; k < bolygoSzam; k++) {
		let x = 250 + (palyaMeretek[bolygok[k].palya] * Math.cos((bolygok[k].szog * (pi / 180))))
		let y = 250 - (palyaMeretek[bolygok[k].palya] * Math.sin((bolygok[k].szog * (pi / 180))))
		ctx.beginPath()
		ctx.arc(x, y, bolygok[k].r, 0, 2 * Math.PI)
		ctx.fillStyle = "brown"
		ctx.fill()
		ctx.stroke()
		bolygok[k].szog += 5
	}
}

function rendszer() {
	ctx.beginPath();
	ctx.arc(250, 250, 20, 0, 2 * Math.PI);
	ctx.fillStyle = "orange"
	ctx.fill()
	ctx.stroke();
	for (let i = 0; i < palyak; i++) {
		ctx.beginPath()
		ctx.arc(250, 250, palyaMeretek[i], 0, 2 * Math.PI)
		ctx.stroke()
	}

}

requestAnimationFrame(Rajzol);