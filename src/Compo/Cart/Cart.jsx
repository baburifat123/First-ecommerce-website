import { useContext } from "react";
import remove_icon from "../../assets/cart_cross_icon.png";
import { ProductContext } from "../Context/Context";
import "./Cart.css";
const Cart = () => {
  const { all_data, cartitem, addcartitem, removecartitem } =
    useContext(ProductContext);
  useContext(ProductContext);
  return (
    <div className="cartitems">
      <div className="cartproduct">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qoantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="second">
        {all_data.map((e) => {
          if (cartitem[e.id] > 0) {
            return (
              <div key={e.id} className="cartproduct2">
                <img className="t" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="q">{cartitem[e.id]}</button>
                <p>${e.new_price * cartitem[e.id]}</p>
                <img
                  className="cursor-pointer"
                  src={remove_icon}
                  onClick={() => {
                    removecartitem(e.id);
                  }}
                  alt=""
                />
              </div>
            );
          }
        })}
      </div>
      <hr />
    </div>
  );
};

export default Cart;
