import React, { useContext } from "react";
import { ProductContext } from "../../Context/Context";
import "../Product.css";
import { FaAngleDown } from "react-icons/fa6";

const Product = (props) => {
  const { all_data } = useContext(ProductContext);

  const filteredItems = all_data.filter(
    (item) => item.category === props.category
  );

  return (
    <div className="">
      <img className="banner" src={props.banner} alt="" />
      <div className="dowp">
        <div className="text1">
          <h1 className="h1">
            <span className="span">Swoing 1-12</span> Out of 54 Products
          </h1>
        </div>
        <div className="text-xl border p-2 rounded-sm">
          <button className="flex items-center gap-2">
            Sort by <FaAngleDown></FaAngleDown>
          </button>
        </div>
      </div>
      <div className="cart grid lg:grid-cols-4">
        {filteredItems.map((item, id) => (
          <div className="menu" key={id}>
            <div className="overflow-hidden rounded-sm">
              <img src={item.image} alt="" />
            </div>
            <h1>{item.name}</h1>
            <div className="price">
              <h1>{item.new_price}$</h1>
              <h1 className="line-through text-[#8f8f8f]">{item.old_price}$</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
