import { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../products';
export const ShopContext = createContext(null);

const getInitialCart = () => {
  const cart = {};
  PRODUCTS.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const objectFromStorage = JSON.parse(localStorage.getItem('cartItems'));
    if (objectFromStorage.hasOwnProperty(undefined)) {
      delete objectFromStorage.undefined;
    }
    return objectFromStorage ? objectFromStorage : getInitialCart();
  });

  // Placing to storage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // localStorage.setItem('cartItems', JSON.stringify(getInitialCart()));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // const getTotalCartItems = () => {
  //   let totalQuantity = 0;
  //   Object.values(cartItems).forEach((quantity) => {
  //     if (cartItems.hasOwnProperty(quantity) && !isNaN(cartItems[quantity])) {
  //       totalQuantity += quantity;
  //     }
  //   });
  //   return totalQuantity;
  // };

  const getTotalCartItems = () => {
    let totalQuantity = 0;
    for (const itemId in cartItems) {
      if (cartItems.hasOwnProperty(itemId) && !isNaN(cartItems[itemId])) {
        totalQuantity += cartItems[itemId];
      }
    }
    return totalQuantity;
  };

  // const getTotalCartItems = () => {
  //   let totalItems = 0;
  //   for (const item in cartItems) {
  //     // console.log('Item ID:', item);
  //     // console.log('Quantity:', cartItems[item]);
  //     if (cartItems.hasOwnProperty(item) && !isNaN(cartItems[item])) {
  //       totalItems += cartItems[item];
  //     }
  //   }
  //   // console.log('Total Items:', totalItems);
  //   return totalItems;
  // };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let neededProduct = PRODUCTS.find(
          (product) => product?.id === Number(item)
        );
        totalAmount += neededProduct?.price * cartItems[item];
      }
    }
    return totalAmount.toFixed(2);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
