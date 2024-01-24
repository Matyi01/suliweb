var kepekurl = [
    "1.png",
    "2.png",
    "3.png",
    "4.jpg",
    "5.jpg",
    "6.png",
    "7.png",
    "8.jpg"
];
function init()
{
    kepkirakas();
}
function kepkirakas()
{
    let asztal = document.getElementById("asztal");

    for(let i = 0; i < kepekurl.length; i++)
    {
        let uj = document.createElement("img");
        uj.src = "kepek/" + kepekurl[i];
        
        asztal.appendChild(uj);
    }


}   