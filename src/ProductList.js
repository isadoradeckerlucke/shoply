import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductList() {
  const products = useSelector((st) => st.products);
  const productCards = Object.keys(products).map((id) => (
    <div className="col-md-3 mb-3" key={id}>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">
            this is where the link would be
            {/* <Link to = {`/products/${id}`}>{products[id].name}</Link> */}
          </h2>
          this is where cart icon with id {id} would be
          {/* <CartIcons id = {id} /> */}
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <h4>here are all of our products</h4>
      <div className="row">{productCards}</div>
    </div>
  );
}

export default ProductList;
