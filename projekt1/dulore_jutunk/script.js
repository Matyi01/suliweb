function start() {
    $("#main").hide();
    $("#game").show();

}

function szoloLerak(szin) {
    let grapeCluster = jQuery("<div>");
    grapeCluster.addClass("grape-cluster");

    for (let i = 1; i < 4; i++) {
        let grapeRow = jQuery("<div>");
        grapeRow.addClass("grape-row");
        for (let j = 0; j < 4-i; j++) {
            let grape = jQuery("<div>");
            grape.addClass("grape " + szin);
            grapeRow.append(grape);
        }
        grapeCluster.append(grapeRow);
    }
    $("#szolohely").append(grapeCluster);
}

function borLerak(szin) {
    let bottle = jQuery("<div>");
    bottle.addClass("bottle");

    let top = jQuery("<div>");
    top.addClass("top");
    bottle.append(top);

    let bottom = jQuery("<div>");
    bottom.addClass("bottom " + szin);
    bottle.append(bottom);

    $("#szolohely").append(bottle);
}
/*



*/