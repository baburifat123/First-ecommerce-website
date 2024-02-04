import { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../../../assets/cart_icon.png";
import logo from "../../../assets/logo.png";
import "./Nav.css";
const Nav = () => {
  const [menu, setmenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav1 flex items-center gap-4">
        <img src={logo} alt="" />
        <h1 className="text-4xl text-black font-semibold">SHOPPER</h1>
      </div>
      <div className="nav2">
        <ul className="flex items-center gap-5">
          <li
            onClick={() => {
              setmenu("shop");
            }}
          >
            <Link to={"/"}>Shop</Link> {menu === "shop" ? <hr /> : <></>}
          </li>

          <li
            onClick={() => {
              setmenu("men");
            }}
          >
            <Link to={"/men"}> Men </Link>
            {menu === "men" ? <hr /> : <></>}
          </li>

          <li
            onClick={() => {
              setmenu("women");
            }}
          >
            <Link to={"/women"}> Women </Link>
            {menu === "women" ? <hr /> : <></>}
          </li>

          <li
            onClick={() => {
              setmenu("kids");
            }}
          >
            <Link to={"/kids"}> Kids </Link>
            {menu === "kids" ? <hr /> : <></>}{" "}
          </li>
        </ul>
      </div>
      <div className="nav3 flex items-center gap-4">
        <button id="button">Login</button>
        <img src={cart} alt="" />
        <div className="counter">0</div>
      </div>
    </div>
  );
};

export default Nav;
