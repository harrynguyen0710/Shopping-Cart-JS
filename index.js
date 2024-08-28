const {
    addProductToCart,
    clearCart,
    removeProductFromCart,
    getCartSummary,
} = require('./cart');


function displayCart() {
    const {totalItems, totalPrice} = getCartSummary(); // gets the total of number of items and the total price of the cart
    console.log(`Total items: ${totalItems}, total price: ${totalPrice}`); // shows the results
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

