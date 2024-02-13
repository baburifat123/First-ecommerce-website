import React, { createContext, useState } from "react";
import all_data from "../../assets/all_product";

export const ProductContext = createContext(null);
const defoultcart = () => {
  let cart = {};
  for (let index = 0; index < all_data.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
export const ShopContext = (props) => {
  const [cartitem, setcart] = useState(defoultcart());
  const addcartitem = (itemid) => {
    setcart((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    console.log(cartitem);
  };
  const removecartitem = (itemid) => {
    setcart((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  const totalq = () => {
    let total = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        total += cartitem[item];
      }
    }
    return total;
  };
  const products = { all_data, cartitem, addcartitem, removecartitem, totalq };
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};
