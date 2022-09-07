import React from "react";

export default function ProductItem(props) {
  return (
    <div className="card text-center">
      <img
        className="card-img-hitop"
        src="./img/applephone.jpg"
        alt="mobile_phone"
        style={{width: 300, height: 300}}
      />
      <div className="card-body text-center">
        <h4 className="card-title">Iphone XS </h4>
        <p className="card-text">600</p>
        <button className="btn btn-success">Add to cart</button>
      </div>
    </div>
  );
}
