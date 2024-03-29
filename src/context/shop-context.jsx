import { createContext, useState } from 'react';
import { PRODUCTS } from '../products';
export const ShopContext = createContext(null);

const getInitialCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getInitialCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  // const updateCartItemCount = (newAmount, itemId) => {
  //   if (isNaN(newAmount)) {
  //     newAmount = 1;
  //   }
  //   setCartItems((prev) => ({
  //     ...prev,
  //     [itemId]: newAmount,
  //   }));
  // };
  const totalCartItems = () => {
    // const values = Object.values(cartItems);
    // const summary = values.reduce((acc, curr) => acc + curr, 0);
    // console.log(values);
    // console.log(summary);
    // return summary;
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let neededProduct = PRODUCTS.find(
          (product) => product.id === Number(item)
        );
        totalAmount += neededProduct.price * cartItems[item];
      }
    }
    return totalAmount.toFixed(2);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    totalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
