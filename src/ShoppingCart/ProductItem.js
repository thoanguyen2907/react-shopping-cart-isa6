import React from "react";

export default function ProductItem(props) {
  let productItem = props.product;
  const {img, name, price} = props.product;
  return (
    <div className="card text-center">
      <img
        className="card-img-hitop"
        src={img}
        alt={name}
        style={{width: 300, height: 300}}
      />
      <div className="card-body text-center">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{price}</p>
        <button className="btn btn-success" onClick={()=>{props.addProduct(productItem)}}>Add to cart</button>
      </div>
    </div>
  );
}
