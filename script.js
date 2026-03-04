let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-btn").innerText = `Cart (${cartCount})`;
}
