// calculate the total price and round to two decimals
// toFixed returns a string representation of numOBj that doesn't use exponential notation and has exactly __ digits after decimal place

export function calculateCartTotal(products, cart, discountAmount = 0) {
  let total = 0;
  for (let id in products) {
    // destructure producs object to get the price
    const { price } = products[id];
    const quantity = cart[id] || 0;
    total += price * quantity;
  }
  return total.toFixed(2);
}

// sum quantity key for each item
export function calculateTotalQuantity(cart) {
  let totalQuantity = 0;
  for (let id in cart) {
    totalQuantity += cart[id];
  }
  return totalQuantity;
}
