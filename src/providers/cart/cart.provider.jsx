import React, { createContext, useState, useEffect } from 'react';

/* IMPORT UTILS */
import { addItemToCart, removeItemFromCart, countItemQuantity } from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  removeFromCart: () => {},
  clearItemsFromCart: () => {},
  cartTotal: () => {},
  cartItemsCount: 0,
});

/* PROVIDER TO WRAP AROUND COMPONENTS */
const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  /* USE EFFECT HOOK TO CALCULATE ITEM COUNT */
  useEffect(() => {
    setCartItemsCount(countItemQuantity(cartItems));
  }, [cartItems]);

  /* CONTEXT FUNCTIONS FOR STATE */
  const addItem = (item) => {
    setCartItems(addItemToCart(cartItems, item));
    setCartItemsCount(cartItemsCount + 1);
  };
  const removeItem = (item) => {
    setCartItems(removeItemFromCart(cartItems, item));
    setCartItemsCount(cartItemsCount - 1);
  };
  const toggleHidden = () => setHidden(!hidden);
  const cartTotal = cartItems.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);
  const removeFromCart = (item) => {
    const items = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(items);
    countItemQuantity(items);
  };
  const clearItemsFromCart = () => {
    setCartItems([]);
    setCartItemsCount(0);
  };

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        cartItemsCount,
        clearItemsFromCart,
        removeFromCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
