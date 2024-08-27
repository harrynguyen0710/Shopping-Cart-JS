const {
    addProductToCart,
    clearCart,
    removeProductFromCart,
    getCartSummary,
} = require('./cart');

function displayCart() {
    const {totalItems, totalPrice} = getCartSummary();
    console.log(`Total items: ${totalItems}, total price: ${totalPrice}`);
}


addProductToCart(1);
addProductToCart(2);
addProductToCart(3);
addProductToCart(4);

displayCart();


removeProductFromCart(5);
removeProductFromCart(3);

displayCart();

clearCart();

displayCart();

