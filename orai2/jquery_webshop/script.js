function kartyakeszit(e) {
    let card = jQuery("<div>");
    card.addClass("card");
    card.css("width", "18rem")
    card.attr("id", "card");
    card.click(function () {
        togglePopup();
    });

    let img = jQuery("<img>");
    img.addClass("card-img-top");
    img.attr("alt", "Card image");
    img.attr("id", "img");
    img.attr("src", e.image)

    let cardbody = jQuery("<div>");
    cardbody.addClass("card-body");
    cardbody.attr("id", "cardbody");

    let cardcontainer = jQuery("<div>");
    cardcontainer.addClass("card-container");
    cardcontainer.attr("id", "cardcontainer");

    let cardtitle = jQuery("<h3>");
    cardtitle.addClass("card-title");
    cardtitle.attr("id", "cardtitle");
    cardtitle.html(e.title);

    let cardtext = jQuery("<p>");
    cardtext.addClass("card-text");
    cardtext.attr("id", "cardtext");
    cardtext.html(e.description);

    let cardrating = jQuery("<i>");
    cardrating.attr("data-star", e.rating.rate);

    let cardratingcount = jQuery("<div>");
    cardratingcount.html("(" + e.rating.count + ")");
    cardratingcount.addClass("cardratingcount");

    let cardprice = jQuery("<h2>");
    cardprice.addClass("card-price");
    cardprice.attr("id", "cardprice");
    cardprice.html(e.price + " $");

    card.append(img);
    cardcontainer.append(cardtitle);
    cardcontainer.append(cardtext);
    cardbody.append(cardcontainer);
    cardbody.append(cardrating);
    cardbody.append(cardratingcount);
    cardbody.append(cardprice);
    card.append(cardbody);
    $("body").append(card);
}

$.ajax({
    url: 'https://fakestoreapi.com/products',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        for (const e of data) {
            kartyakeszit(e);
        }
    }
});

// Function to show and hide the popup
function togglePopup() {
    $(".content").toggle();
}