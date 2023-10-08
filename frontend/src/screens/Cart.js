import React, { useState } from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
const Cart = () => {
  // Sample data for demonstration purposes
  const initialCartItems = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    { id: 3, name: "Item 3", price: 20 },
  ];
  const data = useCart();
  const dispatch = useDispatchCart();
  console.log(data);
  const [cartItems, setCartItems] = useState(initialCartItems);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  if (data && Array.isArray(data) && data.length === 0) {
    // Cart is empty
    console.log("jjjjjj");
    return (
      <div>
        <h1>The cart is empty</h1>
      </div>
    );
  }

  return (
    <div>
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>chicken</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <strong>Total: ${calculateTotalPrice().toFixed(2)}</strong>
      </div>
      <button
        onClick={() => {
          alert("Your orders will come tomorrow");
          dispatch({ type: "reset" });
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
