import React, { createContext } from "react";
import all_data from "../../assets/all_product";

export const ProductContext = createContext(null);

export const ShopContext = (props) => {
  const products = { all_data };

  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};
