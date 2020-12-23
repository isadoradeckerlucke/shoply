import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotalQuantity } from "./helpers";

function NavBar() {
  // get item count and cart value from store (useSelector lets us access store values)
  const itemCount = useSelector((st) => calculateTotalQuantity(st.cartItems));
  const cartValue = useSelector((st) => st.cartValue);
  // if there is one item say item, if there are 0 or more than 1 say items
  const itemUnit = itemCount === 1 ? "item" : "items";

  return (
    <nav className="navbar navbar-light bg-info">
      <Link to="/" className="navbar-brand text-light">
        SHOPLY
      </Link>
      <ul className="navbar-nav flex-row">
        <li className="nav-item pr-3">
          <span className="navbar-text text-light">
            {/* display item count item unit and value ie 2 items $30 */}
            {itemCount} {itemUnit} ${cartValue}
          </span>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link text-light">
            see cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
