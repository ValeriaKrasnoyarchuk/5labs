function calculate() {
    let regexp = /\D/g;
    let productPrice = document.getElementsByName("product-price")[0].value;
    let productAmount = document.getElementsByName("product-amount")[0].value;

    if (Boolean(productPrice) && Boolean(productAmount)) {
        if (regexp.test(productPrice) || regexp.test(productAmount)) {
            alert("Данные введены не корректно");
            return false;

        } else {
            regexp = /\d/g;
            productPrice = parseInt(productPrice.match(regexp).join(""));
            productAmount = parseInt(productAmount.match(regexp).join(""));
            alert(`Итоговая цена: ${productPrice * productAmount}`);

            return false;
        }
    }

    alert("Данные введены не корректно");
    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is fully loaded and parsed");
    let button = document.getElementById("calculate-button");
    button.addEventListener("click", calculate);
});
