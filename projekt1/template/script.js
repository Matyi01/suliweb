/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function display(id) {
    let pages = document.getElementsByClassName("pages")
    pages.every(hide(this));
    document.getElementById(id).style.display = "block";
}

function hide(that) {
    that.style.display = "none";
}