import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import cart from "../../../assets/cart_icon.png";
import logo from "../../../assets/logo.png";
import { ProductContext } from "../../Context/Context";
import "./Nav.css";
const Nav = () => {
  const { totalq } = useContext(ProductContext);
  const [menu, setmenu] = useState("shop");
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="me lg:hidden md:hidden">
          <button onClick={() => setopen(!open)}>
            {open ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <CiMenuBurger className="text-3xl" />
            )}
          </button>
        </div>
        <div id="nav" className="nav1 flex items-center gap-4">
          <img src={logo} alt="" />
          <h1 className="text-4xl text-black font-semibold">SHOPPER</h1>
        </div>
        <div className={`nav2 ${open ? "block" : "hidden"} lg:flex flex-col`}>
          <ul id="n" className="flex gap-5">
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
          <Link to={"/login"}>
            <button id="button">Login</button>
          </Link>
          <Link to={"/cart"}>
            {" "}
            <img src={cart} alt="" />
          </Link>
          <div className="counter">{totalq()}</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
