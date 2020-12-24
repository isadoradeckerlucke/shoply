import rootReducer from "./rootReducer";
import data from "./data.json";
import * as types from "./actionTypes";

describe("shoply reducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual({
      products: data.products,
      cartItems: {},
      cartValue: 0.0,
    });
  });
  //   the below tests don't work-- it works in my app when i run it so i'm not sure what's going on
  it("should handle ADD_TO_CART", () => {
    expect(
      rootReducer([], {
        type: types.ADD_TO_CART,
        id: "47314fa1-ae56-4eae-80be-af6691145951",
      })
    ).toEqual({
      cartItems: { "47314fa1-ae56-4eae-80be-af6691145951": 1 },
      cartValue: "219.99",
    });
  });
  it("should handle REMOVE_FROM_CART", () => {
    expect(
      rootReducer([], {
        type: types.REMOVE_FROM_CART,
        id: "47314fa1-ae56-4eae-80be-af6691145951",
      })
    ).toEqual([
      {
        cartItems: {},
        cartValue: 0.0,
      },
    ]);
  });
});
