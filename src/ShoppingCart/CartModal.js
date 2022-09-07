import React from "react";
// import ProductItem from "./ProductItem";

export default function CartModal(props) {
  let {cartArray}  = props;
  const renderModal = (cartArray) => {
    return cartArray.map((item, index) => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>
            <img
              src={item.img}
              style={{width: "80px", height: "80px"}}
              alt={item.name}
            />
          </td>
          <td>
            <button onClick={()=>{props.handleQuantity(item.id, "dec")}}>-</button>
            <span style={{margin: "0 5px"}}>{item.quantity}</span>
            <button onClick={()=>{props.handleQuantity(item.id, "inc")}}>+</button>
          </td>
          <td> {item.price}</td>
          <td> {(item.price * item.quantity).toLocaleString()}</td>
          <button type="button" onClick={()=>{props.removeProduct(item.id)}}>
            Delete
          </button>
        </tr>
      );
    });
  }
  return (
    <div>
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{width: "120%"}}>
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Image</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderModal(cartArray)}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
