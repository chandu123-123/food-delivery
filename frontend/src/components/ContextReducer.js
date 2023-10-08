import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

// Define your reducer to handle cart actions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
             return [...state,{price:action.price}]
    // Define cases for different actions and update the state accordingly
    case "reset":
          return state=[]
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
 
      <CartDispatchContext.Provider value={dispatch}>
           <CartStateContext.Provider value={state}>
        {children}
        </CartStateContext.Provider>
      </CartDispatchContext.Provider>

  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
