function addToCart(pizza) {
    const cart = [];
    cart.push(pizza);
    updateTotalPrice();
}
function updateTotalPrice() {
    let total = 0;

    switch (cart[cart.length + 1]) {
        case "pizza-salame":
            total += 9;
            break;

        case "pizza-funghi":
            total += 9;
            break;

        case "pizza-margherita":
            total += 7;
            break;
        case "pizza-spinaci":
            total += 9;
            break;
    }

    document.getElementById("total-price").innerHTML = "Gesamtpreis: " + total.toFixed() + "€";
}
