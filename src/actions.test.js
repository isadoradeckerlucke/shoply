import * as actions from "./actions";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to add something to cart", () => {
    const id = "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9";
    const expectedAction = {
      type: types.ADD_TO_CART,
      id,
    };
    expect(actions.addToCart(id)).toEqual(expectedAction);
  });
  it("should create an action to remove something from cart", () => {
    const id = "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9";
    const expectedAction = {
      type: types.REMOVE_FROM_CART,
      id,
    };
    expect(actions.removeFromCart(id)).toEqual(expectedAction);
  });
});
