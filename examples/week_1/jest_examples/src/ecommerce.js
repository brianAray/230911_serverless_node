function calculateTotal(cartItems){
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return totalPrice;
}

function calculateDiscount(calculateTotal, cartItems, discount){
    const totalPrice = calculateTotal(cartItems);
    return totalPrice * discount;
}

module.exports = { calculateTotal, calculateDiscount};