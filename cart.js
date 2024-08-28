let cart = [];
let items = [
    { id: 1, name: 'orange', price: 4000 }, // VND
    { id: 2, name: 'banana', price: 3500 }, // VND
    { id: 3, name: 'apple', price: 8000 }, // VND
];



// Add a product to the cart
const addProductToCart = (id) => {
    const product = items.find(item => item.id === id);
    
    if (!product) {
        console.log(`Your selected product doesn't exist`);
        return;
    } 
    
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    console.log(`${product.name} added to cart`);
    
}

// Remove a product to my cart
const removeProductFromCart = (id) => {
    const productIndex = cart.findIndex(item => item.id === id);
    
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        console.log(`Product with ID ${id} removed successfully`);
    } else {
        console.log(`Product with ID ${id} not found in cart`);
    }
}

// Calculate the total price of items in the cart 
/* sum = price x quantity */ 
const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};


const getCartSummary = () => {
    return {
        totalItems: cart.length,
        totalPrice: getTotalPrice(),
    };
};

const clearCart = () => {
    cart = [];
    console.log('Cart cleared');
};

const payCart = () => {
    const total = getTotalPrice();
    if (total === 0) {
        console.log("Cart is empty. Add items before paying.");
    } else {
        console.log(`Total amount to pay: ${total} VND`);
        clearCart();
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
