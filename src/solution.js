/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let total = 0
  for (let key in cart) {
    total += (cart[key].priceInCents * cart[key].quantity)
  }
  return total
}

function printCartInventory(cart) {
  let string = ''
  for (let key in cart) {
    string+= `${cart[key].quantity}x${key}\n`
  }
  return string
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
