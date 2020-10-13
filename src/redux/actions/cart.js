export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const itemCountPlus = (id) => ({
  type: 'ITEM_COUNT_PLUS',
  payload: id,
});

export const itemCountMinus = (id) => ({
  type: 'ITEM_COUNT_MINUS',
  payload: id,
});
