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

// call function to add a product to the cart, with a param acts as the product id
addProductToCart(1); 
addProductToCart(2);
addProductToCart(3);
addProductToCart(4);

displayCart(); // get the cart's information

// call function to remove a product to the cart, with a param acts the product id
removeProductFromCart(5);
removeProductFromCart(3);

displayCart(); // get cart's information

clearCart(); // clear all items in the cart

displayCart(); // get cart's information

