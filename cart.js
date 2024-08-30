let cart = []; // holds selected products from user before payments

// acts as a database that store data of products
let items = [
    { id: 1, name: 'orange', price: 4000 }, // VND
    { id: 2, name: 'banana', price: 3500 }, // VND
    { id: 3, name: 'apple', price: 8000 }, // VND
];



/* 
input: productId (the id of a selected product)
output: 
    if the selected product does not exist in the database => return nothing
    else, update the cart with the selected product.
process: check whether the product exists in the database, and if it exists, update the cart, else return nothing
*/
const addProductToCart = (productId) => {
    const product = items.find(item => item.id === productId); // find product by the given id
    // if the product doesn't exist, send a notification
    if (!product) {
        console.log(`Your selected product doesn't exist`);
        return;
    } 
    
    // if the product exists, check whether this product have been in the cart yet
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) { // if it's the cart, increase its quantity
        cartItem.quantity += 1;
    } else { // add the selected product to the cart if it haven't existed yet in the cart.
        cart.push({ ...product, quantity: 1 });
    }
    console.log(`${product.name} added to cart`);
    
}


/*
input: productId (the id of the selected product)
output: 
    if this product exist, we delete the selected product out of the cart, else send an alert
    that it doesn't exist to the user. 
process: 
    use the given id to find the position of the selected product, if the productIndex is not -1, 
    we delete the product, else send an alert 
*/
const removeProductFromCart = (productId) => {
    const productIndex = cart.findIndex(item => item.id === productId); // find the id of the product
    
    if (productIndex !== -1) { // if it doesn't exist in the cart, the index will be -1
        cart.splice(productIndex, 1);
        console.log(`Removed successfully`);
    } else {
        console.log(`Not found the selected product`);
    }
}

/*
input: none
output: the total price of the cart
process: iterate through the cart, get the total price by multiply the price with the quantity
*/
const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0); // sum of each product is quantity * price
};


/*
input: none
output: the total number of items in the cart, and the total price of the cart
process: none
*/
const getCartSummary = () => {
    return {
        totalItems: cart.length,
        totalPrice: getTotalPrice(),
    };
};

/*
input: none
output: the cart is cleared
process: clear the cart and alert a notification for the user
*/
const clearCart = () => {
    cart = [];
    console.log('Cart cleared');
};

/*
input: none
output: the total price of cart and alert a notification for the user
process: check whether the cart is empty, if it's empty alert for the user, else proceeed the checkout
*/
const payCart = () => {
    const total = getTotalPrice(); // calculate the total price of the cart
    if (total === 0) {
        console.log("Cart is empty. Add items before paying.");
    } else {
        console.log(`Total amount to pay: ${total} VND`);
        clearCart();
        return total;
        
    }
};

module.exports = {
    addProductToCart,
    removeProductFromCart,
    getTotalPrice,
    getCartSummary,
    clearCart,
    payCart,
};
