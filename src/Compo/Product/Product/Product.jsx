import React, { useContext } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { ProductContext } from "../../Context/Context";
import "../Product.css";
import Item from "../../Item";

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
          <Item
            key={id}
            props={item}
            id={item.id}
            img={item.image}
            name={item.name}
            old_price={item.old_price}
            new_price={item.new_price}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default Product;
