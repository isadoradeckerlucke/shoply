import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import { calculateCartTotal } from "./helpers";
// get data from json file
import data from "./data.json";

const DEFAULT_STATE = {
  products: data.products,
  cartItems: {},
  cartValue: 0.0,
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartCopy = { ...state.cartItems };
      // if there is already this item in the cart, set that as initial quantity. otherwise start quantity at 0. then add 1.
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;

      return {
        ...state,
        cartItems: cartCopy,
        cartValue: calculateCartTotal(state.products, cartCopy),
      };
    }
    case REMOVE_FROM_CART: {
      const cartCopy = { ...state.cartItems };
      // if the item they're trying to remove isn't in cartCopy, move on
      if (!cartCopy[action.id]) return state;
      // if we've gotten to this point in the code, the item they're trying to remove is in the cart. below, we remove one from the count -- which either sets it to 0 or makes the number of __ you have in your cart one less.
      cartCopy[action.id]--;
      // if there are no more of __ item left in cart, remove it from cart (ie don't just have something in cart saying quantity of this item is 0)
      if (cartCopy[action.id] === 0) {
        delete cartCopy[action.id];
      }
      return {
        ...state,
        cartItems: cartCopy,
        cartValue: calculateCartTotal(state.products, cartCopy),
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
