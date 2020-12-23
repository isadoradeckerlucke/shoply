import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcons from "./CartIcons";

function Cart() {
  // get items from store
  const { cartItems, cartValue, products } = useSelector((st) => st);

  const renderTable = () => {
    console.log(cartItems, "i am cart items");
    const itemRows = Object.keys(cartItems).map((id) => (
      <tr key={id}>
        {/* four rows for name, price, number in cart (cartItems is an object with the quantities of everything in the cart), and icons to add or remove */}
        <td className="text-center align-middle">
          <Link to={`/products/${id}`}>{products[id].name}</Link>
        </td>
        <td className="text-center align-middle">${products[id].price}</td>
        <td className="text-center align-middle">{cartItems[id]}</td>
        <td>
          <CartIcons id={id} />
        </td>
      </tr>
    ));

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{itemRows}</tbody>
      </table>
    );
  };

  return cartItems.length === 0 ? (
    <h2>no items in cart yet!</h2>
  ) : (
    <div>
      {renderTable()}
      <p>total: ${cartValue}</p>
    </div>
  );
}

export default Cart;
