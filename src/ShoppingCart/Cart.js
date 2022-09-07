import React, {useState} from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";

export default function Cart() {
  return (
    <div className="container-fluid">
      <h3 className="text-center">Shopping Cart</h3>
      <div className="text-right">
        <span
          style={{width: 17, cursor: "pointer"}}
          data-toggle="modal"
          data-target="#modelId"
        >
          <i className="fa fa-cart mr-5">
            <i className="fa fa-cart-arrow-down"></i>(0) Cart
          </i>
        </span>
      </div>
      <CartModal />
      <ProductList />
    </div>
  );
}
//Receive a task to create a new feature
// CREATING 3 MORE COLUMNS: QUANITY, PRICE, TOTAL PRICE:  PRICE * QUANTITY
