function check() {
    const minta = /^(-|)\d+([\.,]\d+|)$/;
    minta.test(document.getElementById("be"));
    if (minta.test(document.getElementById("be").value)) {
        document.getElementById("hiba").innerHTML = "jo";
    }
    else {
        document.getElementById("hiba").innerHTML = "hiba";
    }
}