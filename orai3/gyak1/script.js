//2 szam bekerese urlap elemekkel 2 szam kozotti egesz szamok kiirasa egymas melle kekkel bekeretezett negytetekbe (js)
function gomb() {
    let szam1 = parseInt(document.getElementById("szam1").value)
    let szam2 = parseInt(document.getElementById("szam2").value)
    console.log(szam1, szam2)
    for (let i = szam1 + 1; i < szam2; i++) {
        console.log(i)

        let negyzet = document.createElement("span")
        negyzet.innerHTML = i
        negyzet.style.display = "inline-block"
        negyzet.style.margin = "5px"
        negyzet.style.border = "2px solid blue"
        negyzet.style.height = "50px"
        negyzet.style.width = "50px"
        negyzet.style.textAlign = "center"
        document.getElementById("box").appendChild(negyzet)
    }
}