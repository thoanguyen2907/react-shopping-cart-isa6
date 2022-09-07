import React, {useState} from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";

export default function Cart() {
  const [cartArray, setCartArray] = useState([]);
  const addProduct = (productItem) => {
    //make a new array and copy the contents of cartArray
    let updateCartArray = [...cartArray];
    let itemIndex = updateCartArray.findIndex(
      (item) => item.id === productItem.id
    );
    // if -1, it means NO match is found
    if(itemIndex !== -1) {
      updateCartArray[itemIndex].quantity += 1;
      //update the quantity attribute of the object  in the updateCartArray
      setCartArray(updateCartArray)
    } else {
      //create updated product object by adding all info and a new attribute "quantity"
      let updatedProduct = {...productItem, quantity: 1};
      //update cartArray variable
      setCartArray([...updateCartArray, updatedProduct]);
    }
  };

  const removeProduct = (productId) => {
    let updatedArray = [...cartArray];
    let itemIndex = updatedArray.findIndex((item) => item.id === productId);
    //if a match is found:
    if(itemIndex !== -1) {
      updatedArray.splice(itemIndex, 1)
    }
    //set cartArray variable
    setCartArray(updatedArray);
  };
  // console.log("cart array", cartArray);
//calculate total of quantity with reduce method
  const calculateQuantity = (cartArray) => {
    return cartArray.reduce((accumulator, current) => {
      return (accumulator = accumulator += current.quantity);
    }, 0);
  }

  const handleQuantity = (id, action) => {
    let changedArray = [...cartArray];
    let itemIndex = changedArray.findIndex((item) => item.id === id);
    if(itemIndex !== -1) {
      if(action === "inc") {
        changedArray[itemIndex].quantity += 1;
      }
      else if(action === "dec") {
        if (changedArray[itemIndex].quantity >= 1) {
          changedArray[itemIndex].quantity -= 1;
        }
      }
      setCartArray(changedArray);
    }
  }

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
            <i className="fa fa-cart-arrow-down"></i>({calculateQuantity(cartArray)}) Cart
          </i>
        </span>
      </div>
      <CartModal cartArray={cartArray} removeProduct={removeProduct}
        handleQuantity={handleQuantity} />
      <ProductList addProduct={addProduct} />
    </div>
  );
}
//Receive a task to create a new feature
// CREATING 3 MORE COLUMNS: QUANITY, PRICE, TOTAL PRICE:  PRICE * QUANTITY

//create handleQuantity function