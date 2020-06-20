export function addToCart(product) {
  return {
    type: "@cart/ADD_TO_CART",
    product,
  };
}

export function removeFromCart(productId) {
  return {
    type: "@cart/REMOVE_FROM_CART",
    productId,
  };
}

export function updateAmount(productId, amount) {
  return {
    type: "@cart/UPDATE_AMOUNT",
    productId,
    amount,
  };
}
